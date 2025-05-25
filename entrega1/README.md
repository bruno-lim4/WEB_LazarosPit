
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
- Shopping cart functionality.
- Admin panel to add, edit, and delete products.
- Basic stock control.
- Admin management
- **BMI and Macronutrients Calculator** (estimates daily needs for protein, carbohydrates, and fats based on user profile).

## 2. Project Description

We are developing a responsive web application that allows users to browse, search, and purchase supplements online, as well as calculate their BMI and daily macronutrient needs.

### Functionalities 
- User authentication (sign up, login).
  
  A card is displayed in a dedicated page which contains input fields for the user to type in its email and password, both the login and register pages are acessible by the home page. Registration also requires the user to input its address and phone number.
- Product browsing with search and filter options.

  A search bar is displayed in the navbar of the main pages, such as home, this search bar will allow the user to type words related to the products, making it easier to browse through the available items. The text will be used as a filter for the database query.
- Cart management (add/remove items).

  The user will be able to add items to its cart while in a specific product page as it will contain a quantity input field and an add button. Items can also be removed from the cart by acessing the cart page, in the right side of the main navbar.
- Admin dashboard for product management (add, edit, delete products).

  As an admin, a page will be acessible through the Admin Dashboard which will contain a table directly linked to the site database, this page will allow the admin to make CRUD operations in this table, such as modifying a product name, description, price and quantity available.
- Admin management.

  As an admin, a page will be acessible through the Admin Dashboard which will contain a table directly linked to the site database, this page will allow the admin to make CRUD operations in this table, such as modifying the admins of the site, their name, emails and other personal information. This will also allow for new admins to be added.
- Product page displaying its name, description and price.

  By clicking on a product card in the home page, the user will be redirected to the product page, containing its image, price, name, description and the option to add a select amount of it to the cart.
- All functionalities must offer accessibility features

  This is made by the addition of alternative description for images.
- **BMI Calculator page:**  
  Users input their height and weight, and the application calculates and displays their Body Mass Index (BMI). Also, it is possible to input average exercise level, exercise duration and frequency alongside with body fat percentage in order to calculate the adequate macro-nutrients.
### Navigation Diagram

![](https://cdn.discordapp.com/attachments/1365750322546606204/1365763990982099047/NavDiagram.png?ex=680e7e56&is=680d2cd6&hm=ac74bbe5ce39134035cc821ca848c3690a6b04e50d92cf6d75e855f1b175c958&=)

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
