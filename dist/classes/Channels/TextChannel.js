"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextChannel = void 0;
const Channel_1 = require("../Channel");
/**
 * Represents a Text Channel
 */
class TextChannel extends Channel_1.Channel {
    /**
     * Create a new TextChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw TextChannel from the API or WebSocket
     */
    constructor(bot, raw) {
        super(bot, raw);
        this.server = raw.server;
        this.name = raw.name;
        this.description = raw.description;
        this.icon = raw.icon;
        this.defaultPermissions = raw.default_permissions;
        this.rolePermissions = raw.role_permissions;
        this.nsfw = raw.nsfw;
        this.lastMessageID = raw.last_message_id;
    }
}
exports.TextChannel = TextChannel;
