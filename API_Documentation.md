
This documentation provides an overview of the available endpoints and their usage in the API. The security configuration allows unrestricted access to the `/api/base/**` endpoints and requires authentication for all other endpoints.

## Administrator Controller

### Add Product
Endpoint: `POST http://localhost:8080/api/admin/product`

**Request Body:**
```json
{
  "name": "Product Name",
  "stock": 10,
  "description": "Product Description",
  "picture": "product_picture.png",
  "price": 29.99
}
```

**Response:**
- Status Code: 200 (OK)
- Body: "Successfully added new product"

### Get All Transactions
Endpoint: `GET http://localhost:8080/api/admin/transaction`

**Response:**
- Status Code: 200 (OK)
- Body: List of transactions in JSON format



## Authentication Controller

### User Registration
Endpoint: `POST http://localhost:8080/api/base/auth/register`

**Request Body:**
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "user@example.com",
  "password": "user_password"
}
```

**Response:**
- Status Code: 200 (OK)
- Body: Token

### User Authentication
Endpoint: `POST http://localhost:8080/api/base/auth/authenticate`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "user_password"
}
```

**Response:**
- Status Code: 200 (OK)
- Body: Token


## Base Controller

### Add Transaction
Endpoint: `POST http://localhost:8080/api/base/add-transaction`

**Request Body:**
```json
{
  "customerName": "Customer Name",
  "address": "Customer Address",
  "product": {
    "name": "Product Name",
    "stock": 5,
    "description": "Product Description",
    "picture": "product_picture.png",
    "price": 19.99
  }
}
```

**Response:**
- Status Code: 200 (OK)
- Body: "Successfully ordered the product"

### Get All Products
Endpoint: `GET http://localhost:8080/api/base/product`

**Response:**
- Status Code: 200 (OK)
- Body: List of products in JSON format

### Get Single User
Endpoint: `GET http://localhost:8080/api/base/user/{token}`

**Path Parameter:**
- `token`: Authentication token

**Response:**
- Status Code: 200 (OK)
- Body: UserLogin JSON object