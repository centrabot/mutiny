import { Bot } from '../../handlers/Bot'
import { Channel } from '../Channel'

/**
 * Represents a raw voice channel from the API or WebSocket
 */
export interface RawVoiceChannel {
    _id: string,
    channel_type: string,
    server: string,
    name: string,
    description: string,
    icon: File,
    default_permissions: number,
    role_permissions: any,//todo
    nsfw: boolean
}

/**
 * Represents a Voice Channel 
 */
export class VoiceChannel extends Channel {
    /**
     * The server that the voice channel belongs to
     */
    server: string

    /**
     * The voice channel's name
     */
    name: string

    /**
     * The voice channel's description
     */
    description: string

    /**
     * The voice channel's icon
     */
    icon?: File

    /**
     * The default permissions given to users in the voice channel
     */
    defaultPermissions: number

    /**
     * An object containing ID->permission (key->value) pairs of the permissions for each role in the voice channel
     */
    rolePermissions: any//todo

    /**
     * Whether the voice channel is NSFW
     */
    nsfw: boolean

    /**
     * Create a new VoiceChannel
     * @param bot The Bot that the Channel belongs to
     * @param raw A raw VoiceChannel from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawVoiceChannel) {
        super(bot, raw)

        this.server = raw.server
        this.name = raw.name
        this.description = raw.description
        this.icon = raw.icon
        this.defaultPermissions = raw.default_permissions
        this.rolePermissions = raw.role_permissions
        this.nsfw = raw.nsfw
    }
}