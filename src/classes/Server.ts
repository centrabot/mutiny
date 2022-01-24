import { Bot, File } from '../handlers/Bot'

/**
 * Represents a raw server from the API or WebSocket
 */
export interface RawServer {
    _id: string,
    owner: string,
    name: string,
    description: string,
    channels: string[],
    categories: RawServerCategory[],
    system_messages: {
        user_joined: string,
        user_left: string,
        user_kicked: string,
        user_banned: string
    },
    roles: RawServerRoles,
    default_permissions: number[],
    icon: File,
    banner: File,
    nsfw: boolean,
    flags: number,
    analytics: boolean,
    discoverable: boolean
}

/**
 * Represents a category in a raw server object
 */
export interface RawServerCategory {
    id: string,
    title: string,
    channels: string[]
}

/**
 * Represents the object of roles in a raw server object
 */
export interface RawServerRoles {
    [key: string]: {
        name: string,
        permissions: number[],
        colour: string,
        hoist: boolean,
        rank: number
    }
}

/**
 * Represents a Server on Revolt
 */
export class Server {
    /**
     * The bot that this Server belongs to
     */
    bot: Bot

    /**
     * The server's ID
     */
    _id: string

    /**
     * The user ID of the server's owner
     */
    owner: string

    /**
     * The server's name
     */
    name: string

    /**
     * The server's description
     */
    description?: string

    /**
     * An array containing the IDs of the server's channels
     */
    channels: string[]

    /**
     * An array containing partial objects for the server's categories
     */
    categories: any[] // todo: category definition

    /**
     * The server's system message channels
     */
    systemMessages: {
        userJoined?: string,
        userLeft?: string,
        userKicked?: string,
        userBanned?: string
    }

    /**
     * An object containing ID->role (key->value) pairs of the server's roles
     */
    roles: object // todo: role definition

    /**
     * An array containing a pair of tuples, that represent default server and channel permissions (in that order)
     */
    defaultPermissions: number[]

    /**
     * The server's icon
     */
    icon?: File

    /**
     * The server's banner
     */
    banner?: File

    nsfw: boolean

    /**
     * Bitfield representing the server's flags
     */
    flags: number

    /**
     * Whether collecting analytics on the server is enabled. Enabled if server is discoverable.
     */
    analytics: boolean

    /**
     * Whether the server is discoverable (through the "Discover Revolt" tab)
     */
    discoverable: boolean

    /**
     * Create a new Server
     * @param bot The Bot that the Server belongs to
     * @param raw A raw Server from the API or WebSocket
     */
    constructor(bot: Bot, raw: RawServer) {
        this.bot = bot

        this._id = raw._id
        this.owner = raw.owner
        this.name = raw.name
        this.description = raw.description
        this.channels = raw.channels
        this.categories = raw.categories
        this.systemMessages = {
            userJoined: raw.system_messages.user_joined,
            userLeft: raw.system_messages.user_left,
            userKicked: raw.system_messages.user_kicked,
            userBanned: raw.system_messages.user_banned
        }
        this.roles = raw.roles
        this.defaultPermissions = raw.default_permissions
        this.icon = raw.icon
        this.banner = raw.banner
        this.nsfw = raw.nsfw
        this.flags = raw.flags
        this.analytics = raw.analytics
        this.discoverable = raw.discoverable
    }
}