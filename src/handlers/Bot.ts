import EventEmitter from 'events'
import { HTTP } from './HTTP'
import { WebSocket } from './WebSocket'
import { Collection } from '../util/Collection'
import { constants } from '../constants'

import { Message } from '../classes/Message'

/**
 * Represents a bot made with Mutiny
 * 
 * @fires Bot#ready
 * @fires Bot#message
 */
export class Bot extends EventEmitter {
    /**
     * The bot's token, used to authenticate with Revolt
     */
    token: string

    /**
     * HTTP handler for this bot
     */
    http: HTTP

    /**
     * WebSocket handler for this bot
     */
    ws: WebSocket

    /**
     * The Bot's user on Revolt
     */
    user?: any

    /**
     * A Collection containing the users the bot has access to
     */
    users: Collection

    /**
     * A Collection containing the servers the bot has access to
     */
    servers: Collection

    /**
     * A Collection containing the channels the bot has access to
     */
    channels: Collection

    /**
     * Create a new bot
     * @param token The bot's token
     */
    constructor(token: string) {
        super()

        this.token = token

        this.http = new HTTP(this, constants.BASE_URL)
        this.ws = new WebSocket(this, true)

        this.users = new Collection()
        this.servers = new Collection()
        this.channels = new Collection()
    }
}

/**
 * Fired when the bot is successfully logged in and authenticated
 * 
 * @event Bot#ready
 */

/**
 * Fired when the bot recieves a Message
 * 
 * @event Bot#message
 * @type {Message}
 */