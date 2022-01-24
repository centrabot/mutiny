import { Bot, File } from '../handlers/Bot';
/**
 * Represents a raw server from the API or WebSocket
 */
export interface RawServer {
    _id: string;
    owner: string;
    name: string;
    description: string;
    channels: string[];
    categories: RawServerCategory[];
    system_messages: {
        user_joined: string;
        user_left: string;
        user_kicked: string;
        user_banned: string;
    };
    roles: RawServerRoles;
    default_permissions: number[];
    icon: File;
    banner: File;
    nsfw: boolean;
    flags: number;
    analytics: boolean;
    discoverable: boolean;
}
/**
 * Represents a category in a raw server object
 */
export interface RawServerCategory {
    id: string;
    title: string;
    channels: string[];
}
/**
 * Represents the object of roles in a raw server object
 */
export interface RawServerRoles {
    [key: string]: {
        name: string;
        permissions: number[];
        colour: string;
        hoist: boolean;
        rank: number;
    };
}
/**
 * Represents a Server on Revolt
 */
export declare class Message {
    /**
     * The bot that this Server belongs to
     */
    bot: Bot;
    /**
     * The ID of the Server
     */
    _id: string;
    /**
     * Create a new Message
     * @param bot The Bot that the Server belongs to
     * @param raw A raw Server from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawServer);
}
