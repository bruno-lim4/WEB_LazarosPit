
# Welcome to Lazaro's Pit!

This project aims to develop a highly functional online supplement store as part of our Introduction to Web Development course. The website will also contain a helpful calculator for BMI and macro-nutrients to better guide ann fitness enjoyer. 

## Group 

- **Bruno Figueiredo Lima** — 14562383  
- **Lázaro Pereira Vinaud Neto** — 14675396  
- **Rafael Brazolin Alves Mansur** — 14604020

## 1. Requirements

The initial requirements are based on the assignment description.  
Additional requirements for our store implementation:
- User login and registration system.
- Product catalog with categories.
- Search bar.
- Shopping cart functionality.
- Admin panel to add, edit, and delete products.
- Admin panel to add, edit, and delete admins.
- Admin panel to add, edit, and delete customers.
- **BMI and Macronutrients Calculator** (estimates daily needs for protein, carbohydrates, and fats based on user profile).

## 2. Project Description

We are developing a responsive web application that allows users to browse, search, and purchase supplements online, as well as calculate their BMI and daily macronutrient needs.
### Navigation Diagram

![Navigation](https://github.com/user-attachments/assets/9eb36547-544e-4f29-b0bc-9ede46100dac)

Home page

![Full_home_page](https://github.com/user-attachments/assets/5fc395e5-6e97-4cb4-b5cc-77e98db1f2d8)

Filtered home page

![Filtered_page](https://github.com/user-attachments/assets/8cf69310-f708-4a67-a327-dea40d72dc81)

Home page after a search

![Search_page](https://github.com/user-attachments/assets/2303df6f-adde-48d7-b463-379cfd97df68)

Log in

![Log_in](https://github.com/user-attachments/assets/76779528-023c-451c-809d-c570e91d0bde)

Sign in 

![Sign_in](https://github.com/user-attachments/assets/c8cc3921-2370-4fcb-8868-53e298dcc79b)

Product page

![Product_page](https://github.com/user-attachments/assets/7523a5ea-9689-4061-bccd-4acb3029526c)


Cart

![Cart](https://github.com/user-attachments/assets/5968bab0-93ce-4c39-8384-d992c5767aed)

Admin dashboard

![Admin_dashboard](https://github.com/user-attachments/assets/77662116-00a0-4565-ab74-a4d260cc07f3)

Customers management

![Customers](https://github.com/user-attachments/assets/ceda261d-dd41-45c1-8ed3-31e2b8cef92a)

Products management

![Products](https://github.com/user-attachments/assets/f9b68f1a-63e7-4bf8-84de-a6471eaaf566)

Admin management

![Admins](https://github.com/user-attachments/assets/f9e1af44-d2ef-4107-b8f9-d2923b6f47ae)

**BMI Calculator**

![Calculator](https://github.com/user-attachments/assets/b9d0474b-c38a-4fd0-aa40-9392d7e4326a)


### Functionalities 

#### Functional Requirements  
- User authentication (sign up, login).
  
  A card is displayed in a dedicated page which contains input fields for the user to type in its email and password, both the login and register pages are acessible by the home page. Registration also requires the user to input its address and phone number.
- Product browsing with search and filter options.

  A search bar is displayed in the navbar of the main pages, such as home, this search bar will allow the user to type words related to the products, making it easier to browse through the available items. The text will be used as a filter for the database query.
- Product purchase.

  The user will be able to click the desired product and get a closer look at its image while also being given a description and price of said item. The quantity can be modified to add more than one at once. 
- Cart management (add/remove items).

  The user will be able to add items to its cart while in a specific product page as it will contain a quantity input field and an add button. Items can also be removed from the cart by acessing the cart page, in the right side of the main navbar.
- Admin dashboard for product management (add, edit, delete products).

  As an admin, a page will be acessible through the Admin Dashboard which will contain a table directly linked to the site database, this page will allow the admin to make CRUD operations in this table, such as modifying a product name, description, price and quantity available.
- Admin dashboard for customer management.

  As an admin, a page will be acessible through the Admin Dashboard which will contain a table directly linked to the site database, this page will allow the admin to make CRUD operations in this table, such as modifying the customers of the site, their name, emails and other personal information. This will also allow for new customers to be added.
- Admin management.

  As an admin, a page will be acessible through the Admin Dashboard which will contain a table directly linked to the site database, this page will allow the admin to make CRUD operations in this table, such as modifying the admins of the site, their name, emails and other personal information. This will also allow for new admins to be added.
- Revenue info.

  As an admin, an info block will be visible in the Admin Dashboard which will contain the value of total revenue obtained through sold itens. 
- Product page displaying its name, description and price.

  By clicking on a product card in the home page, the user will be redirected to the product page, containing its image, price, name, description and the option to add a select amount of it to the cart.
- All functionalities must offer accessibility features

  This is made by the addition of alternative description for images.
- **BMI Calculator page:**  
  Users input their height and weight, and the application calculates and displays their Body Mass Index (BMI). Also, it is possible to input average exercise level, exercise duration and frequency alongside with body fat percentage in order to calculate the adequate macro-nutrients.

#### Non-Functional Requirements

- Single Page Application
- Responsive
- Secure system
  Customers can't access pages and functionalities exclusive to admins.


### Screen Mockups

| Screen                  | Mockup Name |  
|--------------------------|-------------|  
| Login Page               | Mockup1     |  
| Register Page            | Mockup2     |  
| Home Page                | Mockup3     |  
| Product Page             | Mockup4     |  
| Customers Management     | Mockup5     |  
| Cart Page                | Mockup6     |  
| Admin Dashboard          | Mockup7     |  
| Admin Management         | Mockup8     |  
| Product Management       | Mockup9     |  
| BMI/MACROS Calculator    | Mockup10     |  

[Mockups in figma](https://www.figma.com/design/2h4s1tf1CYpqzjQtGRLKmG/Lazaros-Pit?node-id=0-1&m=dev&t=Zwt4Nz8rAqG4uodn-1).
### Information Saved in the Server
- The admin records:
	- Name
	- Id
	- Phone
	- Email
- Customer Information:
	- Name
	- Id
	- Address
	- Phone
	- Email
- Product Information
	- Name
	- Id
	- Photo
	- Description
	- Price
	- Quantity
	- Quantity Sold

The BMI and Macronutrient calculator results won't be saved on the server; they are generated dynamically based on user input.

## 3. Comments about the code
```
├── babel.config.js
├── bin
│   └── server.js
├── entrega1
│   ├── README.md
│   └── templates
│       ├── home.html
│       ├── imgs
│       │   ├── image.png
│       │   ├── search.png
│       │   ├── shopping-cart.png
│       │   └── user-avatar.png
│       ├── login.html
│       ├── product.html
│       └── style.css
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── babel.config.js
│   ├── jsconfig.json
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── README.md
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   ├── logo.png
│   │   │   └── logo.svg
│   │   ├── components
│   │   │   ├── NavBar.vue
│   │   │   └── ProductCard.vue
│   │   ├── main.js
│   │   ├── pages
│   │   │   ├── AdminCustomerPage.vue
│   │   │   ├── AdminDashboard.vue
│   │   │   ├── AdminManagerPage.vue
│   │   │   ├── AdminProductPage.vue
│   │   │   ├── CalculatorPage.vue
│   │   │   ├── CartPage.vue
│   │   │   ├── HomePage.vue
│   │   │   ├── LoginPage.vue
│   │   │   ├── ProductPage.vue
│   │   │   └── RegisterPage.vue
│   │   ├── plugins
│   │   │   ├── vuetify.js
│   │   │   └── webfontloader.js
│   │   ├── router.js
│   │   ├── services
│   │   │   ├── adminService.js
│   │   │   ├── api.js
│   │   │   ├── cartService.js
│   │   │   ├── clientService.js
│   │   │   ├── productService.js
│   │   │   └── tagService.js
│   │   └── utils
│   │       └── auth.js
│   └── vue.config.js
├── README.md
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── admin.js
│   │   ├── cart.js
│   │   ├── client.js
│   │   ├── product.js
│   │   └── tag.js
│   ├── middleware
│   │   ├── authenticateToken.js
│   │   └── onlyAdmin.js
│   ├── models
│   │   ├── admin.js
│   │   ├── cart.js
│   │   ├── client.js
│   │   ├── product.js
│   │   └── tag.js
│   └── routes
│       ├── admin.js
│       ├── cart.js
│       ├── client.js
│       ├── index.js
│       ├── product.js
│       └── tag.js
└── vue.config.js
```

## 4. Test Plan

To test our program, we will try to use all of our functionalities in ways that they were and weren't supposed to.

### User authentication.

- Create an account 
- Log out of account and log in again 
- Log in with wrong password (Shouldn't be possible)
- Sign in with an invalid email (Shouldn't be possible)
- Sign in with future birth date (Shouldn't be possible)
- Sign in with invalid Phone number format (Shouldn't be possible)
- Sign in with invalid zip format (Shouldn't be possible)
- Sign in with non number adress  (Shouldn't be possible)
- Sign in with a missing area (Shouldn't be possible)
- Sign in with inhuman weight (Shouldn't be possible)
- Sign in as a 200+ year old (Shouldn't be possible)

### Product browsing with search and filter options.

- Search for product
- Search for non-existant product
- Search for product with right tag
- Search for product with wrong tag

### Product purchase.

- Click Product
- Add to cart 
- Add negative amount to cart (Shouldn't be possible)
- Add amount bigger than stock to cart (Shouldn't be possible)

### Cart management.

- Increase amount of certain item
- Decrease amount of certain item
- Get negative amount of certain item (Shouldn't be possible)
- Get amount bigger than stock of certain item (Shouldn't be possible)
- Remove item
- Get correct sum 
- Check out
- Fill Credit card information
- Fill credit card information with characters (Shouldn't be possible)

### Admin dashboard for product management.

- Add product
- Remove product
- Edit existing product
- Leave blank space in product information (Shouldn't be possible)
- Fill price with value <= 0 (Shouldn't be possible)
- Fill quantity with negative number (Shouldn't be possible)
- Fill "quantity sold" with value <= 0 (Shouldn't be possible)
- Fill price with a float number (Shouldn't be possible)
- Add tags to product 
- Remove tags from product

### Admin dashboard for customer management.

- Add customer
- Remove customer
- Edit existing customer
- Leave blank space in customer information (Shouldn't be possible)
- Add inhuman weight (Shouldn't be possible)
- Add age 200+ (Shouldn't be possible)
- Add future date as birth year (Shouldn't be possible)
- Add an invalid email (Shouldn't be possible)
- Add invalid Phone number format (Shouldn't be possible)
- Add invalid zip format (Shouldn't be possible)
- Add non number adress (Shouldn't be possible)

### Admin management.

- Add admin
- Remove admin
- Edit existing admin
- Leave blank space in admin information (Shouldn't be possible)
- Add an invalid email (Shouldn't be possible)
- Add invalid Phone number format (Shouldn't be possible)

### Revenue info.

- Increase the amount of sold itens through admin dashboard and see the revenue increase.
- Check out as a customer in the cart and see the revenue increase

### Product page displaying its name, description and price

- Click item
- Add to cart
- Add amount bigger than stock to cart (Shouldn't be possible)
- Add amount <=0 to cart (Shouldn't be possible)

### BMI Calculator page

- Select gender
- Select Actity level
- Input age > 150 (Shouldn't be possible)
- Input age <= 0 (Shouldn't be possible)
- Input inhuman age (Shouldn't be possible)
- Input inhuman weight (Shouldn't be possible)
- Calculate

## 5. Test Results.
After the following the planned test, here are the results of said tests.

### User authentication.

Works as intended, allowing user to create account and log in as long as the user inputs appropriate data. 

### Product browsing with search and filter options.

Works as intended, search is accurate and products are filtered by tags. 

### Product purchase.

Works as intended, products can be clicked for more information and can only be bought in possible amounts. 

### Cart management.

Works as intended, products can be removed and added, credit card information has to be precise. 

### Admin dashboard for product management.

Works as intended, products can be added, removed and edited without alowing inappropriate data.

### Admin dashboard for customer management.

Works as intended, customers can be added, removed and edited without alowing inappropriate data.

### Admin management.

Works as intended, admins can be added, removed and edited without alowing inappropriate data.

### Revenue info.

Works as intended, revenue value increases and decreases as intended.

### Product page displaying its name, description and price

Works as intended, product information is displayed properly.

### BMI Calculator page

Works as intended, accurate calculations without alowing inappropriate data. 

## 6. Build Procedures.

This build procedure assumes the reviewer already has their git credentials set up, including a ssh key.

The reviewer should start by cloning the git repo into a local repository by using
```
$ git clone git@github.com:bruno-lim4/WEB_LazarosPit.git
```
Now the reviewer should add a .env file in the main project folder with JWT_SECRET=yourKey, this is for the JWT user authentication.

For the project configuration both nodejs and npm will be necessary. You can install them by their official website or by running on Ubuntu
```
$ sudo apt update
$ sudo apt install nodejs npm
```
Also, the project uses mongo db, so it should be installed

The following mongo installation tutorial was made by ChatGPT:
```
$ curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
  sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
  --dearmor

$ echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | \
  sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

$ sudo apt update

$ sudo apt install -y mongodb-org
```
After that, run it with 
```
$ sudo systemctl start mongod
```
Create a data base with:
```
$ mongosh

$ use myDatabase
```
Now to install the dependencies and run both back and front end,

In the base project file, run 
```
$ npm install
```
and then
```
$ npm start
```
now the back-end is running in localhost.

In another terminal, navigate to the first public folder and again,
```
$ npm install
```
and now
```
$ npm run serve
```
this will make the front-end run in a localhost port.

Now you can access the website. 

For admin features, the first admin must be created using a post request to http://localhost:8080/admin by insomnia or postman.

A possible admin json is:
```
{
	"name": "admin",
	"email": "admin@gmail.com",
	"password": "admin123",
	"phoneNumber": "123"
}
```
with that, you can test and use our website.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

