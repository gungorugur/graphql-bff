const getFakeData = path => {
  switch (path) {
    case "/products":
      return products;
    case "/products/1":
      return products[0];
    case "/products/1/comments":
      return comments;
    default:
      throw new Error("Path not found");
  }
};

const products = [
  {
    id: 1,
    name: "Cotton Shirt",
    description: "Blue shirt",
    code: "a234bz",
    quantity: 5,
    price: 10
  },
  {
    id: 2,
    name: "T-Shirt Basic",
    description: "Black shirt",
    code: "a934bz",
    quantity: 3,
    price: 5
  },
  {
    id: 3,
    name: "Skinny Jean",
    description: "Blue jean",
    code: "j284bz",
    quantity: 3,
    price: 5
  }
];

const comments = [
  {
    id : 1,
    productId : 1,
    comment : "Beautiful"
  },
  {
    id : 2,
    productId : 1,
    comment : "Good!"
  },
  {
    id : 3,
    productId : 1,
    comment : "Not bad"
  }
]

export { getFakeData };
