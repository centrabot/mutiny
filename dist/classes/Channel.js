"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
/**
 * Represents a basic Channel on Revolt
 */
class Channel {
    /**
     * Create a new Channel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw Channel from the API or WebSocket
     */
    constructor(bot, raw) {
        this.bot = bot;
        this._id = raw._id;
    }
}
exports.Channel = Channel;
