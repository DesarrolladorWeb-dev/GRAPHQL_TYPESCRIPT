"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GREETING = void 0;
// de esta manera le damos que propiedades tendra
const graphql_1 = require("graphql");
exports.GREETING = {
    // el tipo de respuesta que dara
    type: graphql_1.GraphQLString,
    resolve: () => 'Hello wordl'
};
