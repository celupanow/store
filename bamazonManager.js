//dependencies - mysql and inquirer packages
var inquirer = require("inquirer");
var mysql = require("mysql");

//connection to the mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

//menu selection
inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View Products For Sale", "View Low Inventory", "Add To Inventory", "Add New Product"],
            name: "selection"
        }
    ])
    .then(function (inquirerResponse) {
        //switch statement that runs different functions depending on the selection
        switch (inquirerResponse.selection) {
            case "View Products For Sale":
                printItems();
                break;
            case "View Low Inventory":
                lowInventory();
                break;
            case "Add To Inventory":
                updateItem();
                break;
            case "Add New Product":
                addItem();
                break;
            default:
                printItems();
        }
    });

function printItems() {
    //list every available item: the item IDs, names, prices, and quantities.
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("ID: " + res[i].item_id + "\nName: " + res[i].product_name + "\nPrice: " + res[i].price + "\nQuantity: " + res[i].stock_quantity);
                console.log("--------------------------");
            }
        });
        connection.end();
    })
}

function lowInventory() {
    //lists all the items with a quantity lower than 25
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM products WHERE stock_quantity < 25",
            function (err, res) {
                if (err) throw err;
                for (var x = 0; x < res.length; x++) {
                    console.log(res[x].product_name);
                    console.log("--------------------------");
                }
            });
        connection.end();
    })
}

function updateItem() {
    //updates the quantity of the specified item
    connection.connect(function (err) {
        if (err) throw err;
        //asking which item and how much of it
        inquirer.prompt([
            {
                type: "input",
                message: "What is the id of the item you want to add to?",
                name: "addItem"
            },
            {
                type: "input",
                message: "How much do you want to add?",
                name: "amount"
            }
        ]).then(function (inquirerResponse) {
            //getting the current quantity of the item
            connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [inquirerResponse.addItem],
                function (err, res) {
                    if (err) throw err;
                    //adding the new amount to it
                    var newAmount = parseFloat(res[0].stock_quantity) + parseFloat(inquirerResponse.amount);
                    //updating the actual record
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newAmount
                            },
                            {
                                item_id: inquirerResponse.addItem
                            }
                        ],
                        function (err, res) {
                            if (err) throw err;
                            console.log("Item with ID #" + inquirerResponse.addItem + " quantity updated to " + newAmount + "!");
                        });
                    connection.end();
                });
        })
    })
}

function addItem() {
    //adding an item to the database
    connection.connect(function (err) {
        if (err) throw err;
        //asking for all the item's info
        inquirer.prompt([
            {
                type: "input",
                message: "What is the id of the item you want to add?",
                name: "addId"
            },
            {
                type: "input",
                message: "What is the name of the item?",
                name: "addName"
            },
            {
                type: "input",
                message: "What is the department?",
                name: "addDept"
            },
            {
                type: "input",
                message: "What is the price?",
                name: "addPrice"
            },
            {
                type: "input",
                message: "What is the quantity?",
                name: "addQuant"
            }
        ]).then(function (inquirerResponse) {
            //creating the new record
            connection.query("INSERT INTO products SET ?",
                [
                    {
                        item_id: inquirerResponse.addId,
                        product_name: inquirerResponse.addName,
                        department_name: inquirerResponse.addDept,
                        price: inquirerResponse.addPrice,
                        stock_quantity: inquirerResponse.addQuant
                    }
                ],
                function (err, res) {
                    if (err) throw err;
                    console.log("New item added!");
                });
                connection.end();
        });
    });
}
