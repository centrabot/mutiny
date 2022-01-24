"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const events_1 = __importDefault(require("events"));
const HTTP_1 = require("./HTTP");
const WebSocket_1 = require("./WebSocket");
const constants_1 = require("../constants");
/**
 * Represents a bot made with Mutiny
 */
class Bot extends events_1.default {
    /**
     * Create a new bot
     * @param token The bot's token
     */
    constructor(token) {
        super();
        this.token = token;
        this.http = new HTTP_1.HTTP(this, constants_1.constants.BASE_URL);
        this.ws = new WebSocket_1.WebSocket(this, true);
    }
}
exports.Bot = Bot;
