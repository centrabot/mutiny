import { Bot, File } from '../../handlers/Bot'
import { Channel } from '../Channel'

/**
 * Represents a raw group channel from the API or WebSocket
 */
export interface RawGroupChannel {
    _id: string,
    channel_type: string,
    recipients: string[],
    name: string,
    owner: string,
    description: string,
    last_message_id: string,
    icon: File,
    permissions: number,
    nsfw: boolean
}

/**
 * Represents a Group Channel 
 */
export class GroupChannel extends Channel {
    /**
     * An array containing the user IDs of the users in the group channel
     */
    recipients: string[]

    /**
     * The group channel's name
     */
    name: string

    /**
     * The user ID of the owner of the group channel
     */
    owner: string

    /**
     * The group channel's description
     */
    description?: string

    /**
     * The ID of the last message sent
     */
    lastMessageID: string

    /**
     * The group channel's icon
     */
    icon: File

    /**
     * The permissions given to users in the group channel
     */
    permissions: number

    /**'
     * Whether the group channel is NSFW
     */
    nsfw: boolean

    /**
     * Create a new GroupChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw GroupChannel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawGroupChannel) {
        super(bot, raw)

        this.recipients = raw.recipients
        this.name = raw.name
        this.owner = raw.owner
        this.description = raw.description
        this.lastMessageID = raw.last_message_id
        this.icon = raw.icon
        this.permissions = raw.permissions
        this.nsfw = raw.nsfw
    }
}