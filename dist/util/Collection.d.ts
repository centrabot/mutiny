/**
 * An improved Map to hold items
 */
export declare class Collection extends Map {
    /**
     * Create a new Collection
     */
    constructor();
    /**
     * Return a random item from the Collection
     */
    random(): any;
    /**
     * Returns the first value of the collection
     * @returns {any}
     */
    first(): any;
    /**
     * Maps the items from the Collection using a provided mapping function
     * @param {Function} func A function to use with the items to map them
     */
    map(func: Function): unknown[];
    /**
     * Finds all items from the Collection that match the filter function
     * @param {Function} func A function that returns a truthy value
     */
    filter(func: Function): any[];
    /**
     * Removes all items from the Collection that match the filter function
     * @param {Function} func A function that returns a truthy value
     * @todo
     */
    sweep(func: Function): void;
    /**
     * Find the first item from the Collection that matches the filter function
     * @param {Function} func A function that returns a truthy value
     */
    find(func: Function): any;
    /**
     * Convert the Collection to an array of keys
     */
    toKeyArray(): any[];
    /**
     * Convert the Collection to an array of values
     * @returns {Array<any>}
     */
    toValueArray(): any[];
}
