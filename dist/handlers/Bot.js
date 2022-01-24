"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const events_1 = __importDefault(require("events"));
const HTTP_1 = require("./HTTP");
const WebSocket_1 = require("./WebSocket");
const Collection_1 = require("../util/Collection");
const constants_1 = require("../constants");
/**
 * Represents a bot made with Mutiny
 *
 * @fires Bot#ready
 * @fires Bot#message
 */
class Bot extends events_1.default {
    /**
     * Create a new bot
     * @param token The bot's token
     */
    constructor(settings) {
        super();
        if (!settings)
            throw new Error('Settings are required');
        if (!settings.token)
            throw new Error('Token is required');
        this.token = settings.token;
        this.http = new HTTP_1.HTTP(this, constants_1.constants.BASE_URL);
        this.ws = new WebSocket_1.WebSocket(this, (settings.debug || false));
        this.users = new Collection_1.Collection();
        this.servers = new Collection_1.Collection();
        this.channels = new Collection_1.Collection();
    }
}
exports.Bot = Bot;
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
