"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const DirectMessageChannel_1 = require("./Channels/DirectMessageChannel");
const GroupChannel_1 = require("./Channels/GroupChannel");
const TextChannel_1 = require("./Channels/TextChannel");
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
        this.author = raw.author;
        this.content = raw.content;
        this.attachments = raw.attachments;
        this.edited = raw.edited ? new Date(raw.edited.$date) : undefined;
        this.embeds = raw.embeds;
        this.mentions = raw.mentions;
        this.replies = raw.replies;
        const channel = this.bot.channels.get(raw.channel);
        if (!channel)
            this.channel = raw.channel;
        if (channel.type === 'DirectMessage')
            this.channel = new DirectMessageChannel_1.DirectMessageChannel(this.bot, channel);
        if (channel.type === 'Group')
            this.channel = new GroupChannel_1.GroupChannel(this.bot, channel);
        if (channel.type === 'TextChannel')
            this.channel = new TextChannel_1.TextChannel(this.bot, channel);
    }
}
exports.Message = Message;
