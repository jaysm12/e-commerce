# e-commerce Server Docs

This e-commerce API can do :
- Create, Read, Update and Delete product (CRUD Product)
- Create and Delete Cart
- Customer Authentication
- User models with login and registration


## Usage 
---

```
  $ npm install
  $ npm run dev
```


## Routes
---
###  CRUD Product

Route | HTTP | Header | BodyJSON / QueryParam | Response | Description 
-- | -- | -- | -- | -- | -- | --
`api/products/` | GET | - | - | [{name, price, tags_id}] | get all products
`api/products/` | POST | token | {name, price, tags} | {name, price, tags} | create new product
`api/products/:id` | PATCH | token | {name, price, tags} | {name, price, tags} | Edit one product based on `:id` params
`api/products/:id` | GET | - | - | {name,price, tags} | Get one product based on `:id` params
`api/products/:id` | DELETE | - | - | - | Delete one product based on `:id` params

---
### Create and Delete Cart

---

### Users

___
---
---






