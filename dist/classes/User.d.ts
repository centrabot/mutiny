import { Bot, File } from '../handlers/Bot';
/**
 * Represents a raw user from the API or WebSocket
 */
export interface RawUser {
    _id: string;
    username: string;
    avatar: File;
    relations?: UserRelation[];
    badges: number;
    status: {
        text: string;
        presence: string;
    };
    relationship: string;
    online: boolean;
    flags: number;
    bot?: {
        owner: string;
    };
}
/**
 * Represents a user relation
 */
export interface UserRelation {
    /**
     * The ID of the user that the relation belongs to
     */
    _id: string;
    /**
     * The relationship with the user
     */
    status: string;
}
/**
 * Represents the status of a user
 */
export interface UserStatus {
    /**
     * The custom status text, if present
     */
    text: string | undefined;
    /**
     * The presence/status of the user
     */
    presence: string;
}
/**
 * Represents bot specific information about a user, if the user is a bot
 */
export interface UserBotInformation {
    /**
     * The user ID of the bot's owner
     */
    owner?: string;
}
/**
 * Represents a User on Revolt
 */
export declare class User {
    /**
     * The bot that this User belongs to
     */
    bot: Bot;
    /**
     * The user's ID
     */
    _id: string;
    /**
     * The user's username
     */
    username: string;
    /**
     * The user's avatar object
     */
    avatar: object | undefined;
    /**
     * The user's relationships with other known users. Only present if the user is the associated bot user.
     */
    relations?: UserRelation[];
    /**
     * Bitfield representing the user's badges
     */
    badges: number;
    /**
     * The user's status
     */
    status: UserStatus;
    /**
     * The associated bot user's relationship to the user
     */
    relationship?: string;
    /**
     * Whether the user is online
     */
    online: boolean;
    /**
     * Bitfield representing the user's flags
     */
    flags: number;
    /**
     * If present, indicates the user is a bot and contains bot specific details
     */
    botInfo: UserBotInformation | undefined;
    /**
     * Create a new User
     * @param bot The Bot that the User belongs to
     * @param raw A raw User from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawUser);
}
