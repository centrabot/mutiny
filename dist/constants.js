"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
exports.constants = {
    BASE_URL: 'https://api.revolt.chat',
    WS_EVENTS: {
        // Client -> Server
        Authenticate: 'Authenticate',
        BeginTyping: 'BeginTyping',
        EndTyping: 'EndTyping',
        Ping: 'Ping',
        // Server -> Client
        Error: 'Error',
        Authenticated: 'Authenticated',
        Pong: 'Pong',
        Ready: 'Ready',
        Message: 'Message',
        MessageUpdate: 'MessageUpdate',
        MessageDelete: 'MessageDelete',
        ChannelCreate: 'ChannelCreate',
        ChannelUpdate: 'ChannelUpdate',
        ChannelDelete: 'ChannelDelete',
        ChannelGroupJoin: 'ChannelGroupJoin',
        ChannelGroupLeave: 'ChannelGroupLeave',
        ChannelStartTyping: 'ChannelStartTyping',
        ChannelStopTyping: 'ChannelStopTyping',
        ChannelAck: 'ChannelAck',
        ServerUpdate: 'ServerUpdate',
        ServerDelete: 'ServerDelete',
        ServerMemberJoin: 'ServerMemberJoin',
        ServerMemberUpdate: 'ServerMemberUpdate',
        ServerMemberLeave: 'ServerMemberLeave',
        ServerRoleUpdate: 'ServerRoleUpdate',
        ServerRoleDelete: 'ServerRoleDelete',
        UserUpdate: 'UserUpdate',
        UserRelationship: 'UserRelationship'
    },
    BOT_EVENTS: {
        Ready: 'ready',
        Message: 'message'
    }
};
