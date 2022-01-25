"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectMessageChannel = void 0;
const Channel_1 = require("../Channel");
/**
 * Represents a Direct Message Channel
 */
class DirectMessageChannel extends Channel_1.Channel {
    /**
     * Create a new Direct Message Channel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw DirectMessageChannel from the API or WebSocket
     */
    constructor(bot, raw) {
        super(bot, raw);
        this.active = raw.active;
        this.recipients = raw.recipients;
        this.lastMessageID = raw.last_message_id;
    }
}
exports.DirectMessageChannel = DirectMessageChannel;
