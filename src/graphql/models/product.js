export default class Product {
  constructor(connector) {
    this.connector = connector;
  }
  
  getAll() {
    // /products
    return this.connector.get("/products");
  }

  getById(id) {
    // products/id
    return  this.connector.get("/products/1");
  }

  getComments(id){
    //products/id/comments
    return  this.connector.get("/products/1/comments");    
  }
}