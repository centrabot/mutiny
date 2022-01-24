/// <reference types="node" />
import { WebSocket as Client } from 'ws';
import { Bot } from './Bot';
interface WebSocketPingStatus {
    interval: NodeJS.Timer | undefined;
    lastPingSentAt: Date | null;
    lastPingAcknowledged: boolean;
}
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
     * Contains current ping settings, status and interval
     */
    pingStatus: WebSocketPingStatus;
    /**
     * Whether the WebSocket handler should direcly log events for debug purposes
     */
    debug: boolean;
    /**
     * Create a new WebSocket handler
     * @param bot The Bot that the WebSocket handler belongs to
     * @param debug Whether the WebSocket handler should log debug messages
     */
    constructor(bot: Bot, debug?: boolean);
    /**
     * Encode an object into Msgpack and send it to the WebSocket server
     * @param raw
     */
    send(raw: any): Promise<void>;
    /**
     * Send a ping to the WebSocket server
     */
    sendPing(): Promise<void>;
    /**
     * Handler for the WebSocket open event
     */
    handleOpen(): Promise<void>;
    /**
     * Handler for the WebSocket close event
     */
    handleClose(): Promise<void>;
    /**
     * Handler for the WebSocket error event
     */
    handleError(err: any): Promise<void>;
    /**
     * Handler for the WebSocket message event
     */
    handleMessage(raw: any): Promise<void>;
}
export {};
