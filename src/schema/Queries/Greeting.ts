// de esta manera le damos que propiedades tendra
import { GraphQLString } from "graphql"
export const GREETING = {
    // el tipo de respuesta que dara
    type : GraphQLString,
    resolve : () => 'Hello wordl'

}