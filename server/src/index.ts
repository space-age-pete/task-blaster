import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

import { User } from "./entity/User";
import { TaskResolver } from "./resolvers/TaskResolver";
import { CategoryResolver } from "./resolvers/CategoryResolver";

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
    app.use(cors());

    const CLIENT_URL = "http://localhost:3000";
    apolloServer.applyMiddleware({
      app,
      cors: false,
    });

    app.listen(PORT, () =>
      console.log(`now listening at http://localhost:${PORT}`)
    );
    const users = await User.find();
  } catch (err) {
    console.log(err);
  }
})();
