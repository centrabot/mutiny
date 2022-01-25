"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedMessagesChannel = void 0;
const Channel_1 = require("./Channel");
/**
 * Represents a Saved Messages Channel
 */
class SavedMessagesChannel extends Channel_1.Channel {
    /**
     * Create a new SavedMessagesChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw SavedMessagesChannel from the API or WebSocket
     */
    constructor(bot, raw) {
        super(bot, raw);
        this.user = raw.user;
    }
}
exports.SavedMessagesChannel = SavedMessagesChannel;
