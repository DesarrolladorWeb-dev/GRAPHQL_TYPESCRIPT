"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Greeting_1 = require("./Queries/Greeting");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        // cuando visiten greeting ejecutare la funcion GREETING
        greeting: Greeting_1.GREETING
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery, //el query que estaras ejecutando sera 
});
