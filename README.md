# Eccomerce-API 
this API impliments the CRUD for product inventory. It stores name and quantity of the product. it can create, delete, update and delete the product. 
## How to setup on local machine
To use this repository your machine should have [node](https://nodejs.org/en/), npm, [monogodb](https://docs.mongodb.com/manual/installation/) and [git](https://git-scm.com/downloads). 
1. check pre-requisits by these.
```go
node --version
npm --version
git --version
```
2. Now clone this repository
```go
git clone https:https://github.com/anishkr365/ecom.git
```
3. Change directory to Ecomerce-API
```go
cd Ecommerce-API/
```

3. Install dependencies
```go
npm i --save
```
4. Start mongo db this command may differ... system to system.
```go
sudo systemctl start mongod
```
5. That's... it  run the application
```go
npm start
```
6. click [here](http://localhost:8000) or link in terminal to access your application.

## How to test this api using vs-code
1. i assume your system has vs-code and rest-client preinstalled
2. this api already contain one file called route-testing which has all the routes that it support.
3. you just have to click on send request only.
4. remember to change the id for different delte and update.

## File structure
```sh
Ecommerce-API
├── README.md   
├── configs 
│   └── mongoose.js
├── controllers
│   └── products.js
├── index.js   
├── models 
│   └── Product.js 
├── package-lock.json  
├── package.json   
├── route-testing.rest 
└── routes 
    ├── index.js   
    └── products.js
```

