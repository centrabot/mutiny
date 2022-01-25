"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupChannel = void 0;
const Channel_1 = require("../Channel");
/**
 * Represents a Group Channel
 */
class GroupChannel extends Channel_1.Channel {
    /**
     * Create a new GroupChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw GroupChannel from the API or WebSocket
     */
    constructor(bot, raw) {
        super(bot, raw);
        this.recipients = raw.recipients;
        this.name = raw.name;
        this.owner = raw.owner;
        this.description = raw.description;
        this.lastMessageID = raw.last_message_id;
        this.icon = raw.icon;
        this.permissions = raw.permissions;
        this.nsfw = raw.nsfw;
    }
}
exports.GroupChannel = GroupChannel;
