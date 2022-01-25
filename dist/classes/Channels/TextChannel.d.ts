import { Bot } from '../../handlers/Bot';
import { Channel } from '../Channel';
/**
 * Represents a raw text channel from the API or WebSocket
 */
export interface RawTextChannel {
    _id: string;
    channel_type: string;
    server: string;
    name: string;
    description: string;
    icon: File;
    default_permissions: number;
    role_permissions: any;
    nsfw: boolean;
    last_message_id: string;
}
/**
 * Represents a Text Channel
 */
export declare class TextChannel extends Channel {
    /**
     * The server that the text channel belongs to
     */
    server: string;
    /**
     * The text channel's name
     */
    name: string;
    /**
     * The text channel's description
     */
    description: string;
    /**
     * The text channel's icon
     */
    icon?: File;
    /**
     * The default permissions given to users in the text channel
     */
    defaultPermissions: number;
    /**
     * An object containing ID->permission (key->value) pairs of the permissions for each role in the text channel
     */
    rolePermissions: any;
    /**
     * Whether the text channel is NSFW
     */
    nsfw: boolean;
    /**
     * The ID of the last message sent
     */
    lastMessageID: string;
    /**
     * Create a new TextChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw TextChannel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawTextChannel);
}
