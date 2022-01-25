import { Bot } from '../../handlers/Bot';
import { Channel } from '../Channel';
/**
 * Represents a raw saved messages channel from the API or WebSocket
 */
export interface RawSavedMessagesChannel {
    _id: string;
    channel_type: string;
    user: string;
}
/**
 * Represents a Saved Messages Channel
 */
export declare class SavedMessagesChannel extends Channel {
    /**
     * The ID of the user that the saved messages belong to
     */
    user: string;
    /**
     * Create a new SavedMessagesChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw SavedMessagesChannel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawSavedMessagesChannel);
}
