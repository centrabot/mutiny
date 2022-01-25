import { Bot } from '../../handlers/Bot'
import { Channel } from '../Channel'

/**
 * Represents a raw direct message channel from the API or WebSocket
 */
export interface RawDirectMessageChannel {
    _id: string,
    channel_type: string,
    active: boolean,
    recipients: string[],
    last_message_id: string
}

/**
 * Represents a Direct Message Channel 
 */
export class DirectMessageChannel extends Channel {
    /**
     * Whether the direct message is active
     */
    active: boolean

    /**
     * An array containing the user IDs of the users in the direct message
     */
    recipients: string[]

    /**
     * The ID of the last message sent
     */
    lastMessageID: string

    /**
     * Create a new Direct Message Channel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw DirectMessageChannel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawDirectMessageChannel) {
        super(bot, raw)

        this.active = raw.active
        this.recipients = raw.recipients
        this.lastMessageID = raw.last_message_id
    }
}