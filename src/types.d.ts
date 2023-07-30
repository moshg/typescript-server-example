const responseBrand: unique symbol;

/**
 * A dummy definition for `Response`.
 *
 * Typescript provides `Response` interface for only browser environment.
 */
declare type Response = { [responseBrand]: never };
