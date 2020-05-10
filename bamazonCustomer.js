var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

var input = 0;

connection.connect(function (err) {
    if (err) throw err;
    printItems();
});

function printItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++){
        console.log("ID: " + res[i].item_id + "\nName: " + res[i].product_name + "\nPrice: " + res[i].price);
        console.log("--------------------------");
        }
    });
    connection.end();
}

inquirer   
    .prompt([
        {
            type: "input",
            message: "What is the ID of the product you would like to order?",
            name: "productId"
        }
    ]).then(function(inquirerResponse) {
        input = inquirerResponse;
    });