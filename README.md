# bamazon app
This is a node app that uses the Command Line to navigate a database with products for an online store.

No working link because there is no actual HTML or interactive DOM.

## Objectives

 - Use MySQL to create a database containing information about the products for sale.
 - Use Node to allow a customer to place an order.
 - Use Node to allow a manager to add products or check inventory.
 - Use Node to allow a supervisor to check department sales data.
 
## How It Works
There are three different parts to this app. The first is for the customer. It begins by displaying all the products available. The customer must then enter the id of the item they want and how much of that item they want. The app then determines if there is enough stock to fill the order. If not, it alerts the customer. If it does, it places the order, changing the database to reflect this, and displays the customer's total price. The second is for the manager. It starts by displaying a menu of options. The manager can choose to display all of the products currently available. They can choose to display all products that have a quantity of twenty-five or less. They can choose to add to a product's quantity. And they can choose to add an entirely new product. The third is for the supervisor. They can see data in a different table called departments in the database. It begins with a menu. If they choose to display data, it formats everything into a table that displays the departments table data, the product sales from the products table, and a total profit of these. If they choose to add a new department, they can add a new record to the departments ta

## Demonstration Video

Link to Video: https://drive.google.com/file/d/1jS2IVLsA60qvgeAJhZfA1GOUyHesHkAZ/view

## Technologies

 - JavaScript
 - Node.js
 - Bands In Town API
 - Spotify API
 - OMDB API
 - axios
 - moment
 - fs
 - node-spotify-api
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNTQ1Mjg2MTJdfQ==
-->