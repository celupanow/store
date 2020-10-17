<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![LinkedIn][linkedin-shield]][linkedin-url]

 
<h3 align="center">Bamazon App</h3>
<p align="center">
This is a node app that uses the Command Line to navigate a database with products for an online store.
<br />
<br />
<a href=" https://drive.google.com/file/d/1KAnbUqia4wWURy0AiWkc-LvggEZjpoud/view">View Demo</a>
·
<a href="https://github.com/celupanow/store/issues">Report Bug</a>
·
<a href="https://github.com/celupanow/store/issues">Request Feature</a>

</p>

</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
	* [Built With](#built-with)
* [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
* [Roadmap](#roadmap)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

 
<!-- ABOUT THE PROJECT -->

## About The Project
To watch the demonstration video, please click the following link:
[https://drive.google.com/file/d/1hwAIlh1Q5c0y5c-ECf5cDcTccWEMtzMA/view](https://drive.google.com/file/d/1hwAIlh1Q5c0y5c-ECf5cDcTccWEMtzMA/view)

### Built With
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org)
* [inquirer](https://www.npmjs.com/package/inquirer)

<!-- GETTING STARTED -->

## Getting Started
To get a local copy up and running follow these simple steps.


### Prerequisites

You will need to have the lastest version of npm installed.
* npm
```sh
npm install npm@latest -g
```
  
### Installation

1. Clone the repo

```sh

git clone https://github.com/celupanow/store.git

```
2. Install the NPM packages
```sh
npm install
```
3. Run the application using the command line
```sh
node index.js
```

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/store/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->

## Contact
Christina Lupanow - christina@christinalupanow.com
Project Link: [https://celupanow.github.io/store/](https://celupanow.github.io/store/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements
* [GitHub Pages](https://pages.github.com)


<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/store.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/store/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/store.svg?style=flat-square

[forks-url]: https://github.com/celupanow/store/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/store.svg?style=flat-square

[stars-url]: https://github.com/celupanow/store/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/store.svg?style=flat-square

[issues-url]: https://github.com/celupanow/store/issues

[license-shield]: https://img.shields.io/github/license/celupanow/store.svg?style=flat-square

[license-url]: https://github.com/celupanow/store/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png

# bamazon app
This is a node app that uses the Command Line to navigate a database with products for an online store.

No working link because there is no actual HTML or interactive DOM.

## Objectives

 - Use MySQL to create a database containing information about the products for sale.
 - Use Node to allow a customer to place an order.
 - Use Node to allow a manager to add products or check inventory.
 - Use Node to allow a supervisor to check department sales data.
 
## How It Works
There are three different parts to this app. The first is for the customer. It begins by displaying all the products available. The customer must then enter the id of the item they want and how much of that item they want. The app then determines if there is enough stock to fill the order. If not, it alerts the customer. If it does, it places the order, changing the database to reflect this, and displays the customer's total price. The second is for the manager. It starts by displaying a menu of options. The manager can choose to display all of the products currently available. They can choose to display all products that have a quantity of twenty-five or less. They can choose to add to a product's quantity. And they can choose to add an entirely new product. The third is for the supervisor. They can see data in a different table called departments in the database. It begins with a menu. If they choose to display data, it formats everything into a table that displays the departments table data, the product sales from the products table, and a total profit of these. If they choose to add a new department, they can add a new record to the departments table.

## Demonstration Video

Link to Video: https://drive.google.com/file/d/1KAnbUqia4wWURy0AiWkc-LvggEZjpoud/view

## Technologies

 - JavaScript
 - Node.js
 - MySQL
 - table npm package
 - inquirer npm package

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkzODc2MTM0NywxNDA5ODc5NTI5LC0xNz
g1NTk5NF19
-->