//dependencies - mysql and inquirer packages
var inquirer = require("inquirer");
var mysql = require("mysql");
const {table} = require('table');

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
            choices: ["View Product Sales By Department", "Create New Department"],
            name: "selection"
        }
    ])
    .then(function (inquirerResponse) {
        //switch statement that runs different functions depending on the selection
        switch (inquirerResponse.selection) {
            case "View Product Sales By Department":
                printItems();
                break;
            case "Create New Department":
                newDept();
                break;
            default:
                printItems();
        }
    });

function printItems() {
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs, SUM(products.product_sales) AS total FROM departments INNER JOIN products ON departments.department_name = products.department_name GROUP BY departments.department_id, departments.department_name", function (err, res) {
            if (err) throw err;

           var data = [
                ['department_id', 'department_name', 'over_head_costs', 'product_sales', 'total_profit'],
            ];

            var output;

            for (var i = 0; i < res.length; i++) {
                data.push([res[i].department_id, res[i].department_name, res[i].over_head_costs, res[i].total, res[i].total - res[i].over_head_costs]);
            }

            output = table(data);

            console.log(output);
        });
        connection.end();
    });

}


function newDept() {
    //adding a new department to the database
    connection.connect(function (err) {
        if (err) throw err;
        //asking for all the department info
        inquirer.prompt([
            {
                type: "input",
                message: "What is the id of the department you want to add?",
                name: "addId"
            },
            {
                type: "input",
                message: "What is the name of the department?",
                name: "addName"
            },
            {
                type: "input",
                message: "What is the over head cost?",
                name: "addCost"
            }
        ]).then(function (inquirerResponse) {
            //creating the new record
            connection.query("INSERT INTO departments SET ?",
                [
                    {
                        department_id: inquirerResponse.addId,
                        department_name: inquirerResponse.addName,
                        over_head_costs: inquirerResponse.addCost
                    }
                ],
                function (err, res) {
                    if (err) throw err;
                    console.log("New department added!");
                });
                connection.end();
        });
    });
}