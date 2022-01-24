import { Bot } from '../handlers/Bot';
/**
 * Represents a raw message from the API or WebSocket
 */
export interface RawMessage {
    _id: string;
    nonce: string;
    channel: string;
    author: string;
    content?: string;
}
/**
 * Represents a Message sent in a Channel
 */
export declare class Message {
    /**
     * The bot that this Message handler belongs to
     */
    bot: Bot;
    /**
     * The ID of the Message
     */
    _id: string;
    /**
     * The Channel the Message was sent to
     */
    channel: string;
    /**
     * The User that sent the Message
     */
    author: string;
    /**
     * The content of the message
     */
    content?: string;
    /**
     * Create a new Message
     * @param bot The Bot that the Message belongs to
     * @param raw A raw message from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawMessage);
}
