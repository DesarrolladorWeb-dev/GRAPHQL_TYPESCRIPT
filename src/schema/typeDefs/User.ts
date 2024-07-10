import {GraphQLObjectType, GraphQLString, GraphQLID} from 'graphql'
// el tipo que sera como se realiza en Typescript
export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id :  {type : GraphQLID}, //graphql tiene un dato especifico para los id
        name  :  {type : GraphQLString},
        username  :  {type : GraphQLString},
        password :  {type : GraphQLString}
    }
})