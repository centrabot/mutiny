import { AxiosResponse } from 'axios';
import { Bot } from './Bot';
/**
 * Handles requests to the API
 */
export declare class HTTP {
    /**
     * The bot that this HTTP handler belongs to
     */
    bot: Bot;
    /**
     * The base URL used for API requests
     */
    baseURL: string;
    /**
     * Create a new HTTP handler
     * @param baseURL
     */
    constructor(bot: Bot, baseURL: string);
    /**
     * Make a GET request
     * @param path The path to make the request to
     * @returns The result of the request
     */
    get(path: string): Promise<AxiosResponse | undefined>;
}
