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
/**
 * Handles WebSocket connection, authentication and events
 */
class WebSocket {
    /**
     * Create a new WebSocket handler
     */
    constructor(bot, debug = false) {
        this.bot = bot;
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
                console.debug(`[WS] Message sent ${raw.type ? `\nEvent: ${raw.type}` : ''}`);
        });
    }
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
    handleClose() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug)
                console.debug(`[WS] Connection closed`);
            this.bot.emit('close');
        });
    }
    handleError(err) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug)
                console.error(`[WS] Error\n${err}`);
        });
    }
    handleMessage(raw) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.debug)
                console.log(`[WS] Message recieved`);
            const message = yield (0, msgpack_1.decode)(raw);
            console.log(message);
            if (this.debug)
                console.debug(`[WS] Message decoded ${message.type ? `\nEvent: ${message.type}` : ''}`);
        });
    }
}
exports.WebSocket = WebSocket;
