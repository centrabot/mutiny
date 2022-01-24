import { Bot } from '../handlers/Bot'

/**
 * Represents a raw server from the API or WebSocket
 */
export interface RawServer {
    _id: string
}

/**
 * Represents a Server on Revolt
 */
export class Message {
    /**
     * The bot that this Server belongs to
     */
    bot: Bot

    /**
     * The ID of the Server
     */
    _id: string

    /**
     * Create a new Message
     * @param bot The Bot that the Server belongs to
     * @param raw A raw Server from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawServer) {
        this.bot = bot

        this._id = raw._id
    }
}