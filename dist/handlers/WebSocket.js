"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocket = void 0;
const ws_1 = require("ws");
const msgpack_1 = require("@msgpack/msgpack");
const constants_1 = require("../constants");
const Message_1 = require("../classes/Message");
const User_1 = require("../classes/User");
const Server_1 = require("../classes/Server");
const SavedMessagesChannel_1 = require("../classes/Channels/SavedMessagesChannel");
const DirectMessageChannel_1 = require("../classes/Channels/DirectMessageChannel");
const GroupChannel_1 = require("../classes/Channels/GroupChannel");
const TextChannel_1 = require("../classes/Channels/TextChannel");
const VoiceChannel_1 = require("../classes/Channels/VoiceChannel");
/**
 * Handles WebSocket connection, authentication and events
 */
class WebSocket {
    /**
     * Create a new WebSocket handler
     * @param bot The Bot that the WebSocket handler belongs to
     * @param debug Whether the WebSocket handler should log debug messages
     */
    constructor(bot, debug = false) {
        this.bot = bot;
        this.pingStatus = {
            interval: undefined,
            lastPingSentAt: null,
            lastPingAcknowledged: false
        };
        this.debug = debug;
        bot.http.get('/').then((res) => {
            this.client = new ws_1.WebSocket(`${res === null || res === void 0 ? void 0 : res.data.ws}?format=msgpack`);
            this.client.on('open', () => this.handleOpen());
            this.client.on('close', () => this.handleClose());
            this.client.on('error', (err) => this.handleError(err));
            this.client.on('message', (raw) => this.handleMessage(raw));
        });
    }
    /**
     * Encode an object into Msgpack and send it to the WebSocket server
     * @param raw
     */
    send(raw) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield (0, msgpack_1.encode)(raw);
            yield ((_a = this.client) === null || _a === void 0 ? void 0 : _a.send(message));
            if (this.debug)
                console.debug(`[WS] Message sent: ${raw.type || '(unknown)'}`);
        });
    }
    /**
     * Send a ping to the WebSocket server
     */
    sendPing() {
        return __awaiter(this, void 0, void 0, function* () {
            const sendDate = new Date();
            yield this.send({
                type: constants_1.constants.WS_EVENTS.Ping,
                data: +sendDate
            });
            if (this.debug)
                console.debug(`[WS] Ping sent`);
            this.pingStatus.lastPingSentAt = sendDate;
            this.pingStatus.lastPingAcknowledged = false;
        });
    }
    /**
     * Handler for the WebSocket open event
     */
    handleOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug)
                console.debug(`[WS] Connection opened`);
            yield this.send({
                type: constants_1.constants.WS_EVENTS.Authenticate,
                token: this.bot.token
            });
        });
    }
    /**
     * Handler for the WebSocket close event
     */
    handleClose() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug)
                console.debug(`[WS] Connection closed`);
        });
    }
    /**
     * Handler for the WebSocket error event
     */
    handleError(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug)
                console.error(`[WS] Connection error\n${err}`);
        });
    }
    /**
     * Handler for the WebSocket message event
     */
    handleMessage(raw) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield (0, msgpack_1.decode)(raw);
            if (this.debug)
                console.debug(`[WS] Message recieved: ${message.type || '(unknown)'}`);
            switch (message.type) {
                case constants_1.constants.WS_EVENTS.Error:
                    if (this.debug)
                        console.error(`[WS] Server error: ${message.error}`);
                    break;
                case constants_1.constants.WS_EVENTS.Authenticated:
                    if (this.debug)
                        console.log(`[WS] Successfully authenticated`);
                    this.pingStatus.interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                        if (this.pingStatus.lastPingSentAt) {
                            if (this.pingStatus.lastPingAcknowledged === false) {
                                if (this.debug)
                                    console.debug(`[WS] Warning: Last ping not acknowledged`);
                            }
                            else
                                this.sendPing();
                        }
                        else
                            this.sendPing();
                    }), 20 * 1000);
                    break;
                case constants_1.constants.WS_EVENTS.Pong:
                    if (this.debug)
                        console.debug(`[WS] Ping acknowledged`);
                    this.pingStatus.lastPingAcknowledged = true;
                    break;
                case constants_1.constants.WS_EVENTS.Ready:
                    for (let data of message.users) {
                        const user = new User_1.User(this.bot, data);
                        this.bot.users.set(user._id, user);
                    }
                    for (let data of message.servers) {
                        const server = new Server_1.Server(this.bot, data);
                        this.bot.servers.set(server._id, server);
                    }
                    for (let data of message.channels) {
                        let channel;
                        if (data.type === 'SavedMessages')
                            channel = new SavedMessagesChannel_1.SavedMessagesChannel(this.bot, data);
                        if (data.type === 'DirectMessage')
                            channel = new DirectMessageChannel_1.DirectMessageChannel(this.bot, data);
                        if (data.type === 'Group')
                            channel = new GroupChannel_1.GroupChannel(this.bot, data);
                        if (data.type === 'TextChannel')
                            channel = new TextChannel_1.TextChannel(this.bot, data);
                        if (data.type === 'VoiceChannel')
                            channel = new VoiceChannel_1.VoiceChannel(this.bot, data);
                        this.bot.channels.set(channel === null || channel === void 0 ? void 0 : channel._id, channel);
                    }
                    this.bot.emit(constants_1.constants.BOT_EVENTS.Ready);
                    break;
                case constants_1.constants.WS_EVENTS.Message:
                    const msg = new Message_1.Message(this.bot, message);
                    this.bot.emit(constants_1.constants.BOT_EVENTS.Message, msg);
                    break;
                case constants_1.constants.WS_EVENTS.UserUpdate:
                    const user = this.bot.users.get(message.id);
                    if (!user && this.debug)
                        console.debug(`[WS] Unable to update user ${message.id}, user not found`);
                    if (!user)
                        return;
                    if (message['data']) {
                        for (const [key, value] of Object.entries(message.data)) {
                            if (!this.bot.users.get(message.id)[key])
                                return;
                            this.bot.users.get(message.id)[key] = value;
                        }
                    }
                    if (message['clear']) {
                        if (message.clear === 'StatusText')
                            this.bot.users.get(message.id).status.text = undefined;
                        if (message.clear === 'Avatar')
                            this.bot.users.get(message.id).avatar = undefined;
                    }
                    break;
            }
        });
    }
}
exports.WebSocket = WebSocket;
