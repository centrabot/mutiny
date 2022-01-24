/// <reference types="node" />
import EventEmitter from 'events';
import { HTTP } from './HTTP';
import { WebSocket } from './WebSocket';
import { Collection } from '../util/Collection';
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
    constructor(token: string);
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
