import express from "express";
import http from "http";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import schema from "./graphql/schema";
import RestConnector from "./graphql/restconnector";
import Product from "./graphql/models/product";

const GRAPHQL_PORT = 8080;

const app = express();
app.use(cors());
app.use(compression());

const restConnector = new RestConnector();

const models = {
  product: new Product(restConnector)
};

const graphQLOptions = {
  schema,
  context: {
    models
  }
};

app.use("/graphql", bodyParser.json(), graphqlExpress(graphQLOptions));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

const server = http.createServer(app);

server.listen(GRAPHQL_PORT, error => {
  if (error) {
    console.error(error);
  } else {
    console.log(`BFF app has been running on port: ${GRAPHQL_PORT}!`);
  }
});
