"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
/**
 * Represents a Server on Revolt
 */
class Message {
    /**
     * Create a new Server
     * @param bot The Bot that the Server belongs to
     * @param raw A raw Server from the API or WebSocket
     */
    constructor(bot, raw) {
        this.bot = bot;
        this._id = raw._id;
        this.owner = raw.owner;
        this.name = raw.name;
        this.description = raw.description;
        this.channels = raw.channels;
        this.categories = raw.categories;
        this.systemMessages = {
            userJoined: raw.system_messages.user_joined,
            userLeft: raw.system_messages.user_left,
            userKicked: raw.system_messages.user_kicked,
            userBanned: raw.system_messages.user_banned
        };
        this.roles = raw.roles;
        this.defaultPermissions = raw.default_permissions;
        this.icon = raw.icon;
        this.banner = raw.banner;
        this.nsfw = raw.nsfw;
        this.flags = raw.flags;
        this.analytics = raw.analytics;
        this.discoverable = raw.discoverable;
    }
}
exports.Message = Message;
