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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Handles requests to the API
 */
class HTTP {
    /**
     * Create a new HTTP handler
     * @param bot The Bot that the HTTP handler belongs to
     * @param baseURL The base URl for every API request
     */
    constructor(bot, baseURL) {
        if (!bot.token)
            throw new Error('Token is missing from bot');
        this.bot = bot;
        this.baseURL = baseURL;
    }
    /**
     * Make a GET request
     * @param path The path to make the request to
     */
    get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(`${this.baseURL}${path}`, {
                    headers: {
                        'Authorization': this.bot.token
                    }
                });
                return res;
            }
            catch (err) {
                throw err.response.data.error || err;
            }
        });
    }
    /**
     * Make a POST request
     * @param path The path to make the request to
     * @param body An optional body to send with the request
     */
    post(path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.post(`${this.baseURL}${path}`, {
                    headers: {
                        'x-bot-token': this.bot.token
                    },
                    body
                });
                return res;
            }
            catch (err) {
                throw err.response.data.error || err;
            }
        });
    }
}
exports.HTTP = HTTP;
