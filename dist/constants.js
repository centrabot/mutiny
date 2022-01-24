"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
exports.constants = {
    BASE_URL: 'https://api.revolt.chat',
    WS_EVENTS: {
        Authenticate: 'Authenticate',
        BeginTyping: 'BeginTyping',
        EndTyping: 'EndTyping',
        Ping: 'Ping',
        Error: 'Error',
        Authenticated: 'Authenticated',
        Pong: 'Pong',
        Ready: 'Ready',
        Message: 'Message'
    },
    EMITTER_EVENTS: {
        Ready: 'ready',
        Message: 'message'
    }
};
