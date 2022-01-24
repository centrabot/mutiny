export const constants = {
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
}