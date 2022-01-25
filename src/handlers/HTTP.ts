import axios, { AxiosResponse } from 'axios'
import { Bot } from './Bot'

/**
 * Handles requests to the API
 */
export class HTTP {
    /**
     * The bot that this HTTP handler belongs to
     */
    bot: Bot

    /**
     * The base URL used for API requests
     */
    baseURL: string

    /**
     * Create a new HTTP handler
     * @param bot The Bot that the HTTP handler belongs to
     * @param baseURL The base URl for every API request
     */
    constructor(bot: Bot, baseURL: string) {
        if (!bot.token) throw new Error('Token is missing from bot')

        this.bot = bot

        this.baseURL = baseURL
    }

    /**
     * Make a GET request
     * @param path The path to make the request to
     */
    async get(path: string): Promise<AxiosResponse | undefined> {
        try {
            const res = await axios.get(`${this.baseURL}${path}`, {
                headers: {
                    'Authorization': this.bot.token
                }
            })

            return res
        } catch(err: any) {
            throw err.response.data.error || err
        }
    }

    /**
     * Make a POST request
     * @param path The path to make the request to
     * @param body An optional body to send with the request
     */
    async post(path: string, body?: any): Promise<AxiosResponse | undefined> {
        try {
            const res = await axios.post(`${this.baseURL}${path}`, {
                headers: {
                    'x-bot-token': this.bot.token
                },
                body
            })

            return res
        } catch(err: any) {
            throw err.response.data.error || err
        }
    }
}