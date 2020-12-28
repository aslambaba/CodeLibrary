const express = require('express');
const app = express();
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const GQLSchema = require('./Schema/gqlSchema');
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema: GQLSchema,
    graphiql: true,
}))

const PORT = 1201;
app.listen(PORT, ()=>{console.log('Your Server is Runnning on ' + PORT)} )