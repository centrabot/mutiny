/// <reference types="node" />
import EventEmitter from 'events';
import { HTTP } from './HTTP';
import { WebSocket } from './WebSocket';
import { Collection } from '../util/Collection';
/**
 * Settings for a bot made with Mutiny
 */
export interface BotSettings {
    /**
     * The bot's token, used to authenticate with Revolt
     */
    token: string;
    /**
     * Whether debug logging should be enabled
     */
    debug: boolean;
}
/**
 * Represents a file object on Revolt, used for avatars, server icons, banners and attachments
 */
export interface File {
    _id: string;
    tag: string;
    size: number;
    filename: string;
    metadata: {
        type: string;
        width?: number;
        height?: number;
    };
    content_type: string;
}
/**
 * Represents a bot made with Mutiny
 *
 * @fires Bot#ready
 * @fires Bot#message
 */
export declare class Bot extends EventEmitter {
    /**
     * The bot's token, used to authenticate with Revolt
     */
    token: string;
    /**
     * HTTP handler for this bot
     */
    http: HTTP;
    /**
     * WebSocket handler for this bot
     */
    ws: WebSocket;
    /**
     * A Collection containing the users the bot has access to
     */
    users: Collection;
    /**
     * A Collection containing the servers the bot has access to
     */
    servers: Collection;
    /**
     * A Collection containing the channels the bot has access to
     */
    channels: Collection;
    /**
     * Create a new bot
     * @param token The bot's token
     */
    constructor(settings: BotSettings);
}
/**
 * Fired when the bot is successfully logged in and authenticated
 *
 * @event Bot#ready
 */
/**
 * Fired when the bot recieves a Message
 *
 * @event Bot#message
 * @type {Message}
 */ 
