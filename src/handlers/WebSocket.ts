import { WebSocket as Client } from 'ws'
import { encode, decode } from '@msgpack/msgpack'
import { Bot } from './Bot'
import { constants } from '../constants'

import { Message } from '../classes/Message'
import { User } from '../classes/User'

interface WebSocketPingStatus {
    interval: NodeJS.Timer | undefined,
    lastPingSentAt: Date | null,
    lastPingAcknowledged: boolean
}

/**
 * Handles WebSocket connection, authentication and events 
 */
export class WebSocket {
    /**
     * The bot that this WebSocket handler belongs to
     */
    bot: Bot

    /**
     * The WebSocket client/connection. Can be undefined if not initialized.
     */
    client: Client | undefined

    /**
     * Contains current ping settings, status and interval
     */
    pingStatus: WebSocketPingStatus

    /**
     * Whether the WebSocket handler should direcly log events for debug purposes 
     */
    debug: boolean

    /**
     * Create a new WebSocket handler
     * @param bot The Bot that the WebSocket handler belongs to
     * @param debug Whether the WebSocket handler should log debug messages
     */
    constructor(bot: Bot, debug: boolean = false) {
        this.bot = bot

        this.pingStatus = {
            interval: undefined,
            lastPingSentAt: null,
            lastPingAcknowledged: false
        }

        this.debug = debug
        
        bot.http.get('/').then((res) => {
            this.client = new Client(`${res?.data.ws}?format=msgpack`)

            this.client.on('open', () => this.handleOpen())
            this.client.on('close', () => this.handleClose())
            this.client.on('error', (err) => this.handleError(err))
            this.client.on('message', (raw) => this.handleMessage(raw))
        })
    }

    /**
     * Encode an object into Msgpack and send it to the WebSocket server
     * @param raw 
     */
    async send(raw: any) {
        const message = await encode(raw)

        await this.client?.send(message)

        if (this.debug) console.debug(`[WS] Message sent: ${raw.type || '(unknown)'}`)
    }

    /**
     * Send a ping to the WebSocket server
     */
    async sendPing() {
        const sendDate = new Date()

        await this.send({
            type: constants.WS_EVENTS.Ping,
            data: +sendDate
        })

        if (this.debug) console.debug(`[WS] Ping sent`)

        this.pingStatus.lastPingSentAt = sendDate
        this.pingStatus.lastPingAcknowledged = false
    }

    /**
     * Handler for the WebSocket open event
     */
    async handleOpen() {
        if (this.debug) console.debug(`[WS] Connection opened`)

        await this.send({
            type: constants.WS_EVENTS.Authenticate,
            token: this.bot.token
        })
    }

    /**
     * Handler for the WebSocket close event
     */
    async handleClose() {
        if (this.debug) console.debug(`[WS] Connection closed`)
    }

    /**
     * Handler for the WebSocket error event
     */
    async handleError(err: any) {
        if (this.debug) console.error(`[WS] Connection error\n${err}`)
    }

    /**
     * Handler for the WebSocket message event
     */
    async handleMessage(raw: any) {
        const message: any = await decode(raw)

        if (this.debug) console.debug(`[WS] Message recieved: ${message.type || '(unknown)'}`)

        switch (message.type) {
            case constants.WS_EVENTS.Error:
                if (this.debug) console.error(`[WS] Server error: ${message.error}`)

                break

            case constants.WS_EVENTS.Authenticated:
                if (this.debug) console.log(`[WS] Successfully authenticated`)

                this.pingStatus.interval = setInterval(async () => {
                    if (this.pingStatus.lastPingSentAt) {
                        if (this.pingStatus.lastPingAcknowledged === false) {
                            if (this.debug) console.debug(`[WS] Warning: Last ping not acknowledged`)
                        }

                        else this.sendPing()
                    }

                    else this.sendPing()
                }, 20 * 1000)

                break

            case constants.WS_EVENTS.Pong:
                if (this.debug) console.debug(`[WS] Ping acknowledged`)

                this.pingStatus.lastPingAcknowledged = true
                    
                break

            case constants.WS_EVENTS.Ready:
                for (let data of message.users) {
                    const user = new User(this.bot, data)

                    this.bot.users.set(user._id, user)
                }

                this.bot.emit(constants.BOT_EVENTS.Ready)

                break
            
            case constants.WS_EVENTS.Message:
                const msg = new Message(this.bot, message)

                this.bot.emit(constants.BOT_EVENTS.Message, msg)

                break

            case constants.WS_EVENTS.UserUpdate:
                const user = this.bot.users.get(message.id)

                if (!user && this.debug) console.debug(`[WS] Unable to update user ${message.id}, user not found`)
                if (!user) return

                if (message['data']) {
                    for (const [key, value] of Object.entries(message.data)) {
                        if (!this.bot.users.get(message.id)[key]) return

                        this.bot.users.get(message.id)[key] = value
                    }
                }

                if (message['clear']) {
                    if (message.clear === 'StatusText') this.bot.users.get(message.id).status.text = undefined
                    if (message.clear === 'Avatar') this.bot.users.get(message.id).avatar = undefined
                }

                break
        }
    }
}