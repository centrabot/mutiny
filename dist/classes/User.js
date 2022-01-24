"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/**
 * Represents a User on Revolt
 */
class User {
    /**
     * Create a new User
     * @param bot The Bot that the User belongs to
     * @param raw A raw User from the API or WebSocket
     */
    constructor(bot, raw) {
        this.bot = bot;
        this._id = raw._id;
        this.username = raw.username;
        this.avatar = raw.avatar;
        this.relations = raw.relations || undefined;
        this.badges = raw.badges;
        this.status = raw.status;
        this.relationship = raw.relationship;
        this.online = raw.online;
        this.flags = raw.flags;
        this.botInfo = raw.bot || undefined;
    }
}
exports.User = User;
