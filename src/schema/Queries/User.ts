import { GraphQLID, GraphQLList } from "graphql";
import { Users } from "../../Entities/Users"; 
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType), //sera una lista de tipos de usuario y usamos new porque es una clase 
    async resolve() {
        return await Users.find() //porque es una lista de objetos
    }
}

export const GET_USER = {
    type:  UserType,
    args:{
        id:{type:GraphQLID}
    },
    async resolve(_:any, args:any){
        return await Users.findOneBy({id: args.id});
    
    }
}