import {GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLString} from 'graphql'
import {Users} from '../../Entities/Users'  //nos permitira interactuar con la tabla
import { UserType } from '../typeDefs/User'
import bcryptjs from 'bcryptjs'
import { MessageType } from '../typeDefs/Message'


export const CREATE_USER = {
    type: UserType,  //retornara 
    args: {
        name : {type: GraphQLString},
        username : {type: GraphQLString},
        password : {type: GraphQLString}

    },

    async resolve(_ : any , args: any){
        const {name, username , password} = args
        //encriptamos 
        const encryptPassword = await bcryptjs.hash(password, 10)
        const result = await Users.insert({
            name: name,
            username: username,
            password : encryptPassword
        })




        // de esta manera me mostrara todos los argumentos y que el id mos muestre
        return { ...args, id : result.identifiers[0].id, password:encryptPassword};
    }
}

export const DELETE_USER = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID},
    },
    async resolve(_:any, {id}:any){
        const result = await Users.delete({id: id})
        // console.log(result)
        if(result.affected === 1) return true
        return false
    }
    
}

export const UPDATE_USER = {
    type: MessageType,
    args:{
        id : {type:GraphQLID},
        input: { //puede llamarse aqui como deses lo agrupamos de esta manera para que abajo se escriba solo input 
            type : new GraphQLInputObjectType({ //objeto que resibira los parametros no tan solo es el tipo de dato
                name : 'UserInput',
                fields:{
                    name : {type: GraphQLString},
                    username: {type: GraphQLString},
                    oldPassword: {type: GraphQLString},
                    newPassword: {type: GraphQLString},
                }
            })
        }
    },
    async resolve(_:any, {id, input} : any ){
        console.log(id)
        
        const userFound = await Users.findOneBy({id: id})
        console.log(userFound)
        
        if (!userFound) return {
            // Si no se encuentra el usuario, devuelve false
            success: false,
            message: "User not found"
        }

        const isMatch = await bcryptjs.compare(input.oldPassword, userFound.password)

        // console.log('isMatch:', isMatch); //aqui es porque la contra coincide TRUE
        if(!isMatch) return {
            success : false,
            message: "Old password is incorrect"
        }

        const newPasswordHash = await bcryptjs.hash(input.newPassword, 10)
        

        const response = await Users.update({id}, {
            name : input.name,
            username : input.username,
            password : newPasswordHash
        })
        if(response.affected === 0) return false //si no encuentra el id
        return {
            success : true,
            message: "User update succesfully"
        }; // Devuelve el resultado de la comparación de contraseñas
    }
}