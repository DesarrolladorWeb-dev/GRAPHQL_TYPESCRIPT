import express from 'express';
import {graphqlHTTP} from 'express-graphql'
import { schema } from './schema'; //aqui automaticamente busca el index

const app = express()

app.use('/graphql', graphqlHTTP({
    graphiql : true, 
    schema,
}))

export default app