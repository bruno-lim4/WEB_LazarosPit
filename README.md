# lazaros-pit

## Project setup
```
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

### Functionalities 
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
### Navigation Diagram`

![](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Navigation.drawio.png&dark=auto#R%3Cmxfile%3E%3Cdiagram%20id%3D%22C5RBs43oDa-KdzZeNtuy%22%20name%3D%22Page-1%22%3E7Vtbd5s4EP41fkwPEgbbj7GTptlNu9njtmme9mhBAbYYOUL40l%2B%2FwkgGRGJj1xiRkyejYXRh9M2n0UjumZPZ6oaiuf%2BZuDjsQcNd9cyrHoTAGBn8J5WsM4llCYFHA1co5YJp8AvLmkKaBC6OS4qMkJAF87LQIVGEHVaSIUrJsqz2RMJyr3Pk4Ypg6qCwKn0IXOZn0iEc5PJPOPB82TOwR9mbGZLK4ktiH7lkWRCZ1z1zQglh2dNsNcFhajxpl4fb9UN499O%2B%2BePv%2BBl9G%2F%2F59cv3i6yxj4dU2X4CxRE7uum%2F2NPo%2B9D4h361Z%2F1HHN%2F7z88XcpZitpYGwy63nygSynzikQiF17l0TEkSuTht1uClXOeOkDkXAi78DzO2FmBACSNc5LNZKN7iVcB%2BFJ4f06Y%2BWKJ0tRItbwprWYgYXf8oFgq10mJebVOS9WKGKLtMgcQFTojiOHCk%2BGMQyiHVNLGYipgk1ME77CrMyjvxMNtl%2F0wvtXkBrmICbzCZYf4tXIHiELFgUcY0Eq7hbfXy6ecPAgEHoAGO2kRDjoDHwpt9aMgB8Fia%2Fy6iAVpawcGskkMjrl93qt%2FQRNtaTbQY9gKFiejpC1qMEd0z%2FUs%2FYHg6RxuTLHn4UJ7qw2y7wJTh1U5jiLemLcYrI5K%2BKC%2Fz9R3IRdsvrO2y3sntByr2G3%2B%2B5YIJCp2ETyDR1JJ2XztLmhVT9qAd8m7HbrDgjx7b2CMTPRFuj6JZ7eeEyBcX8YaDLrkCsOarrJp4Lxvi4%2Bcf4c6CSDbJR521Wu6Ji0v967JKGjWps7xKgj3keWJWhHWDIagVK8IKFO%2BIxwW3kZ7eDEZlbzZb9%2BaqM08DL9LYhBbUzYT9F%2FhQJZ%2FIrQY6BWOVLXvOvVdLPGLWpJHCpFovzKmU1WYb0cM9CTbLkgxXQBlTfahgJftuUau4gVcbUuIec6A0lBmm0tAGd9vPPh6K9pFQfCUU34vQ4%2FaDh2wSWsKn8Y7PJvA5aIoqjwIiaBGI5jsQ2wQiGOyJbk6VMm0%2BYRqRCCtpkwbwCuoyJ%2BjXROx5dghgWGWYN5w91w0MemVLQTV5rk%2B2tNsTrVe2VI57d47qMssqGVco9v8liLo1U0la7IPVVAKw2t4HvxTMaU615QjwA9zngk5CF5vBNnAwIRfOk4WEh8V6nFjQuqAwT0Ov%2BPVQcKBEcCPlaHuPumVZCuCyAZw2ynspNfMqDcxQhDw8w5vUcmd4oG%2BVDWu3TgOgYqh3GjiABqxu0YCSjgXDPTwA2%2BABqw4PfIsxfTM0oEE40L17S7%2FFAzGj5Of2AlsTzGB3ihnsYRmRcLCbGVT98zBDNWM%2BSWLG21WpoAtOD1s%2FC4O1Iq7giauExPO4AXmDkX5H%2BBpde0zvOojxAuv0rAJPnYk%2B08l%2F9eA6O%2FoniabOqvhq%2Bxd5zFb362e%2FSnqejBmsG77L2%2B26%2BFOtEPkT740r3acX%2BjsUHKunTdtNSHu%2B1%2Bom2ej9fnCsYbYa1g2QNbvEDatB6BQj6vhcpu0VX%2FViqgY%2B1e%2BcT5Uixn1XPpvMOsnVqCN7SzWYGpm795aqvm0YCtwa2FvC6m2Xe0rcxGHbJVRHx1YXy5HRnGPzYv7nvMzu%2BV8czev%2FAQ%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

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

Link for mockups in figma: 
https://www.figma.com/design/2h4s1tf1CYpqzjQtGRLKmG/Lazaros-Pit?node-id=0-1&m=dev&t=Zwt4Nz8rAqG4uodn-1
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

## 3.

## 4. Test Plan

To test our program, we will try to use all of our functionalities in ways that they were and weren't supposed to.

### User authentication.

- Create an account 
- Log out of account and log in again 
- Log in with wrong password 
- Sign in with an invalid email 
- Sign in with future birth date 
- Sign in with invalid Phone number format 
- Sign in with invalid zip format 
- Sign in with non number adress  00000
- Sign in with a missing area 
- Sign in with inhuman weight
- Sign in as a 200+ year old

### Product browsing with search and filter options.

- Search for product
- Search for non-existant product
- Search for product with right tag
- Search for product with wrong tag

### Product purchase.

- Click Product
- Add to cart 0000
- Add negative amount to cart
- Add amount bigger than stock to cart

### Cart management.

- Increase amount of certain item
- Decrease amount of certain item
- Get negative amount of certain item
- Get amount bigger than stock of certain item
- Remove item
- Get correct sum 
- Check out

### Admin dashboard for product management.

- Add product
- Remove product
- Edit existing product
- Leave blank space in product information
- Fill price with value <= 0
- Fill quantity with negative number
- Fill "quantity sold" with value <= 0 000000
- Fill price with a float number 000000
- Add tags to product 
- Remove tags from product

### Admin dashboard for customer management.

- Add customer
- Remove customer
- Edit existing customer
- Leave blank space in customer information
- Add inhuman weight
- Add age 200+ 
- Add future date as birth year
- Add an invalid email
- Add invalid Phone number format 
- Add invalid zip format
- Add non number adress 

### Admin management.

- Add admin
- Remove admin
- Edit existing admin
- Leave blank space in admin information
- Add an invalid email
- Add invalid Phone number format 

### Revenue info.

- Increase the amount of sold itens through admin dashboard and see the revenue increase.
- Check out as a customer in the cart and see the revenue increase

### Product page displaying its name, description and price

- Click item
- Add to cart
- Add amount bigger than stock to cart
- Add amount <=0 to cart

### BMI Calculator page

- Select gender
- Select Actity level
- Input age > 150
- Input age <= 0
- Input inhuman age
- Input inhuman weight
- Calculate

## 5. Test Results.

## 6. Build Procedures.
# lazaros-pit

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
