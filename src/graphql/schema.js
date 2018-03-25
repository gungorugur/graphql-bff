import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Product {
  id: Int
  name: String
  description: String
  code: String
  quantity: Int
  price: Int
}


type Comment {
  id: Int
  productId : Int
  comment: String
}

type Query {
  products: [Product]
  product(id : Int!) : Product
  comments(productId : Int!) : [Comment]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
