"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
/**
 * Represents a Message sent in a Channel
 */
class Message {
    /**
     * Create a new Message
     * @param bot The Bot that the Message belongs to
     * @param raw A raw message from the API or WebSocket
     */
    constructor(bot, raw) {
        this.bot = bot;
        this._id = raw._id;
        this.channel = raw.channel;
        this.author = raw.author;
        this.content = raw.content;
    }
}
exports.Message = Message;
