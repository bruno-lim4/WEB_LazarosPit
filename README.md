
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
- Checkout process (without payment integration at this stage).
- Admin panel to add, edit, and delete products.
- Order history per user.
- Basic stock control.
- **BMI (Body Mass Index) Calculator.**
- **Macronutrients Calculator** (estimates daily needs for protein, carbohydrates, and fats based on user profile).

## 2. Project Description

We are developing a responsive web application that allows users to browse, search, and purchase supplements online, as well as calculate their BMI and daily macronutrient needs.

### Functionalities to Implement
- User authentication (sign up, login, logout).
- Product browsing with search and filter options.
- Shopping cart management (add/remove/update items).
- Admin dashboard for product management (add, edit, delete products).
- User order history page.
- **BMI Calculator page:**  
  Users input their height and weight, and the application calculates and displays their Body Mass Index (BMI). Also, it is possible to input average exercise level, exercise duration and frequency alongside with body fat percentage in order to calculate the adequate macro-nutrients
- **Macronutrients Calculator page:**  
  Users input their height, weight, age, gender, and activity level. The system calculates and returns recommended daily intake of proteins, carbohydrates, and fats.

### Navigation Diagram

![](https://cdn.discordapp.com/attachments/1365750322546606204/1365763990982099047/NavDiagram.png?ex=680e7e56&is=680d2cd6&hm=ac74bbe5ce39134035cc821ca848c3690a6b04e50d92cf6d75e855f1b175c958&=)

### Screen Mockups

| Screen                  | Mockup Name |  
|--------------------------|-------------|  
| Login Page               | Mockup1     |  
| Home Page                | Mockup2     |  
| Product Page             | Mockup3     |  
| Customers Management     | Mockup4     |  
| Checkout Page            | Mockup5     |  
| Admin Dashboard          | Mockup6     |  
| Admin Management         | Mockup7     |  
| Product Management       | Mockup8     |  
| BMI/MACROS Calculator    | Mockup9     |  

### Information Saved in the Server
- User Information (name, email, password hash, address).
- Product Information (name, description, price, category, stock quantity, image URL).
- Order Information (user ID, list of purchased products, quantities, total price, order date).

> The BMI and Macronutrient calculator results will **not** be saved on the server; they are generated dynamically based on user input.
