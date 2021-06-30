const { ApolloServer, gql } = require("apollo-server");
const { animals, mainCards, categories } = require("./db");
const typeDefs = require("./schema");
const Category = require("./resolvers/Category");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Animal = require("./resolvers/Animal");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Mutation,
    Animal,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
