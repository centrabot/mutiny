"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const Collection_1 = require("../util/Collection");
/**
 * Represents a Server on Revolt
 */
class Server {
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
        //this.channels = raw.channels
        this.channels = new Collection_1.Collection();
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
        for (let channelID of raw.channels) {
            const data = this.bot.channels.get(channelID);
            if (!data)
                return;
            this.channels.set(channelID, data);
        }
    }
}
exports.Server = Server;
