## Description

Simple implementation of Backend For Frontend pattern using by graphql

### Install dependencies

```
yarn install
```

### Start project in development mode

```
yarn start-dev
```


### Example Query 
Get product detail and its comments in single query

```
query {
  product(id :1) {id, name , description, code, quantity, price},
  comments(productId:1) {
    comment
  }
}
```

### Example Response

```
{
  "data": {
    "product": {
      "id": 1,
      "name": "Cotton Shirt",
      "description": "Blue shirt",
      "code": "a234bz",
      "quantity": 5,
      "price": 10
    },
    "comments": [
      {
        "comment": "Beautiful"
      },
      {
        "comment": "Good!"
      },
      {
        "comment": "Not bad"
      }
    ]
  }
}

```                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                   
