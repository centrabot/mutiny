import { Bot } from '../handlers/Bot';
/**
 * Represents a raw channel from the API or WebSocket
 */
export interface RawChannel {
    _id: string;
    channel_type: string;
}
/**
 * Represents a basic Channel on Revolt
 */
export declare class Channel {
    /**
     * The bot that this Channel belongs to
     */
    bot: Bot;
    /**
     * The ID of the Channel
     */
    _id: string;
    /**
     * The type of the channel
     */
    type: string;
    /**
     * Create a new Channel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw Channel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawChannel);
}
