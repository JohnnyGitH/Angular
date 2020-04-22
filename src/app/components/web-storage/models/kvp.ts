/**
 * This model is important because of the way that
 * local and session storage are handled. They both use
 * key value pairs and this makes it easy to interact with them.
 */
export class KVP {
    key: string;
    value: string;
}