/// <reference types="node" />
import EventEmitter from 'events';
import { HTTP } from './HTTP';
import { WebSocket } from './WebSocket';
/**
 * Represents a bot made with Mutiny
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
     * Create a new bot
     * @param token The bot's token
     */
    constructor(token: string);
}
