//* INSTANCIANDO O EXPRESS
const express = require("express");
const app = express();
//*CRIANDO UMA PORTA
const port = 3000;
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

//* CRIANDO UM TIPO
const RootQueryType = new GraphQLObjectType({
    name: "Query",
    fields:{
        hello: {
            type: GraphQLString,
            resolve: () => "Hello World"
        },
        name:{
            type: GraphQLString,
            resolve: () => "Nice Ceschini"
        }
    }
});

//* CRIANDO UM SCHEMA
const schema = new GraphQLSchema({
    query: RootQueryType
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

//* INICIANDO O SERVIDOR
app.listen(port, () => console.log(`Example app listening on port ${port}!`));