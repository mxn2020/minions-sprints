/**
 * Minions Sprints SDK
 *
 * Sprint definitions, scope, and velocity tracking
 *
 * @module @minions-sprints/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Sprints.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
