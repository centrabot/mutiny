import { Bot } from '../handlers/Bot'

/**
 * Represents a raw channel from the API or WebSocket
 */
export interface RawChannel {
    _id: string
}

/**
 * Represents a basic Channel on Revolt
 */
export class Message {
    /**
     * The bot that this Channel belongs to
     */
    bot: Bot

    /**
     * The ID of the Channel
     */
    _id: string

    /**
     * Create a new Channel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw Channel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawChannel) {
        this.bot = bot

        this._id = raw._id
    }
}