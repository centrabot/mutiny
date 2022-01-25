import { Bot, File } from '../handlers/Bot';
import { DirectMessageChannel } from './Channels/DirectMessageChannel';
import { GroupChannel } from './Channels/GroupChannel';
import { TextChannel } from './Channels/TextChannel';
/**
 * Represents a raw message from the API or WebSocket
 */
export interface RawMessage {
    _id: string;
    nonce: string;
    channel: string;
    author: string;
    content: string;
    attachments: File[];
    edited: {
        $date: string;
    };
    embeds: any[];
    mentions: string[];
    replies: string[];
    masquerade: {
        name: string;
        avatar: string;
    };
}
/**
 * Represents a Message sent in a Channel
 */
export declare class Message {
    /**
     * The bot that this Message belongs to
     */
    bot: Bot;
    /**
     * The ID of the Message
     */
    _id: string;
    /**
     * The Channel the Message was sent to
     */
    channel: DirectMessageChannel | GroupChannel | TextChannel | string | undefined;
    /**
     * The User that sent the Message
     */
    author: string;
    /**
     * The content of the message
     */
    content?: string;
    /**
     * An array containing File objects, if the message has any attachments sent with it
     */
    attachments: File[];
    /**
     * The date that the message was last edited, if it has been edited
     */
    edited: Date | undefined;
    /**
     * An array containing Embed objects, if the message has any embeds sent with it
     */
    embeds: any[];
    /**
     * An array containing the IDs of users mentioned in the message
     */
    mentions: string[];
    /**
     * An array containing the IDs of messages replied to in the message
     */
    replies: string[];
    /**
     * Create a new Message
     * @param bot The Bot that the Message belongs to
     * @param raw A raw message from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawMessage);
}
