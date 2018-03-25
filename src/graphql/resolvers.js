const resolvers = {
  Query: {
    products(root, args, ctx) {
      return ctx.models.product.getAll();
    },
    product(root, args, ctx) {
      console.log("Received id:"+args.id)
      return ctx.models.product.getById(args.id);
    },
    comments(root, args, ctx) {
      console.log("Received productId:"+args.productId)
      return ctx.models.product.getComments(args.productId);
    }
  }
};

export default resolvers;
