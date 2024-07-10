import { GraphQLSchema , GraphQLObjectType } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { CREATE_USER , DELETE_USER, UPDATE_USER} from "./Mutations/User"; 
import { GET_ALL_USERS } from "./Queries/User";
import { GET_USER } from "./Queries/User";


const RootQuery = new GraphQLObjectType({
    name : 'RootQuery',
    fields : { //estas funciones son las que puedes consultar 
        // cuando visiten greeting ejecutare la funcion GREETING
        greeting: GREETING,
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        createUser: CREATE_USER,
        deleteUser: DELETE_USER, 
        updateUser : UPDATE_USER
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery, //el query que estaras ejecutando sera 
    mutation : Mutation
})