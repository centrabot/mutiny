"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceChannel = void 0;
const Channel_1 = require("../Channel");
/**
 * Represents a Voice Channel
 */
class VoiceChannel extends Channel_1.Channel {
    /**
     * Create a new VoiceChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw VoiceChannel from the API or WebSocket
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
    }
}
exports.VoiceChannel = VoiceChannel;
