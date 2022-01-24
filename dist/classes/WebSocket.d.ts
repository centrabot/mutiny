import { WebSocket as Client } from 'ws';
import { Bot } from './Bot';
/**
 * Handles WebSocket connection, authentication and events
 */
export declare class WebSocket {
    /**
     * The bot that this WebSocket handler belongs to
     */
    bot: Bot;
    /**
     * The WebSocket client/connection. Can be undefined if not initialized.
     */
    client: Client | undefined;
    /**
     * Whether the WebSocket handler should direcly log events for debug purposes
     */
    debug: boolean;
    /**
     * Create a new WebSocket handler
     */
    constructor(bot: Bot, debug?: boolean);
    /**
     * Encode an object into Msgpack and send it to the WebSocket server
     * @param raw
     */
    send(raw: any): Promise<void>;
    handleOpen(): Promise<void>;
    handleClose(): Promise<void>;
    handleError(err: any): Promise<void>;
    handleMessage(raw: any): Promise<void>;
}
