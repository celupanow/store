//dependencies - mysql and inquirer packages
var inquirer = require("inquirer");
var mysql = require("mysql");

//connection to the mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//opening connection to database and running the itemSelection function
connection.connect(function (err) {
    if (err) throw err;
    printItems();
});


//this function prints out every item's id, name, and price then runs the placeOrder function
function printItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + "\nName: " + res[i].product_name + "\nPrice: " + res[i].price);
            console.log("--------------------------");
        }
        placeOrder();
    });

}

function placeOrder() {
    //asking the user for the id of the product they would like to order
    //and how many they would like
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the ID of the product you would like to order?",
                name: "productId"
            },
            {
                type: "input",
                message: "How many would you like?",
                name: "orderQuantity"
            }
        ]).then(function (inquirerResponse) {
            //sql statement selects the quantity of the product that was chosen by the user
            connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [inquirerResponse.productId],
                function (err, res) {
                    if (err) throw err;
                    //creating a new variable holds the result of the user's desired quantity subtracted from the current quantity
                    var comparison = res[0].stock_quantity - inquirerResponse.orderQuantity;
                    //if the comparison is less than or equal to zero
                    if (comparison <= 0) {
                        //alert customer that there isn't enough in stock
                        console.log("Insufficient quantity!");
                    } else {
                        //update the sql database to reflect the new quantity
                        connection.query("UPDATE products SET ? WHERE ?",
                            [
                                {
                                    stock_quantity: comparison
                                },
                                {
                                    item_id: inquirerResponse.productId
                                }
                            ],
                            function (err, res) {
                                if (err) throw err;
                                //tell the customer their order has been placed
                                console.log("Order placed!");
                            });
                        //show the customer their total
                        connection.query("SELECT price, product_sales FROM products WHERE item_id = ?", [inquirerResponse.productId],
                            function (err, res) {
                                if (err) throw err;
                                console.log("Your total is: $" + res[0].price * inquirerResponse.orderQuantity + ".00");
                                //update the product_sales column
                                connection.query("UPDATE products SET ? WHERE ?",
                                    [
                                        {
                                            product_sales: (parseFloat(inquirerResponse.orderQuantity) + parseFloat(res[0].product_sales)) * parseFloat(res[0].price)
                                        },
                                        {
                                            item_id: inquirerResponse.productId
                                        }
                                    ],
                                    function (err, res) {
                                        if (err) throw err;
                                    });
                                //disconnect
                                connection.end();
                            });
                    }
                })
        });
}













