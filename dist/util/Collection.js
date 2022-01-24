"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
/**
 * An improved Map to hold items
 */
class Collection extends Map {
    /**
     * Create a new Collection
     */
    constructor() {
        super();
    }
    /**
     * Return a random item from the Collection
     */
    random() {
        const array = this.toKeyArray();
        return this.get(array[Math.floor(Math.random() * array.length)]);
    }
    /**
     * Returns the first value of the collection
     * @returns {any}
     */
    first() {
        return this.values().next().value;
    }
    /**
     * Maps the items from the Collection using a provided mapping function
     * @param {Function} func A function to use with the items to map them
     */
    map(func) {
        if (!(func instanceof Function))
            throw new Error('Cannot map values without a function');
        return this.toValueArray().map(func.bind(this));
    }
    /**
     * Finds all items from the Collection that match the filter function
     * @param {Function} func A function that returns a truthy value
     */
    filter(func) {
        if (!(func instanceof Function))
            throw new Error('Cannot filter values without a function');
        return this.toValueArray().filter(func.bind(this));
    }
    /**
     * Removes all items from the Collection that match the filter function
     * @param {Function} func A function that returns a truthy value
     * @todo
     */
    sweep(func) {
        return this.toValueArray().filter(func.bind(this)).forEach((item) => { });
    }
    /**
     * Find the first item from the Collection that matches the filter function
     * @param {Function} func A function that returns a truthy value
     */
    find(func) {
        return this.toValueArray().filter(func.bind(this))[0];
    }
    /**
     * Convert the Collection to an array of keys
     */
    toKeyArray() {
        return [...this.keys()];
    }
    /**
     * Convert the Collection to an array of values
     * @returns {Array<any>}
     */
    toValueArray() {
        return [...this.values()];
    }
}
exports.Collection = Collection;
