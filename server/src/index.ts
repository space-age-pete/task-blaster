import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "./resolvers/CategoryResolver";

import { User } from "./entity/User";
import { ApolloServer } from "apollo-server-express";
import { TaskResolver } from "./resolvers/TaskResolver";

(async () => {
  try {
    const app = express();
    const PORT = 3001;

    await createConnection();

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [CategoryResolver, TaskResolver],
      }),
    });

    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () =>
      console.log(`now listening at http://localhost:${PORT}`)
    );
    const users = await User.find();
  } catch (err) {
    console.log(err);
  }
})();
