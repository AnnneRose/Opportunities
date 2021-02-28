import { ApolloServer, gql } from 'apollo-server-express';
import express from "express";
import mongoose from'mongoose';
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";


require('dotenv').config()
const uri = process.env.MONGO_URL;


const startServer = async () => {

    const app = express();
    const server = new ApolloServer({ 
    typeDefs,
    resolvers 
    });

    server.applyMiddleware({ app });

    await mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true}
    );

    app.listen({ port:4000 }, () =>
        console.log(`server ready at http://localhost:4000${server.graphqlPath}'`)
    );  

};
