// Provide an example of array destructuring and object destructuring in JavaScript to extract
// product names from an array of products and their details from a product object in an online
// shopping system.

// const product = ["tv","ac","fan","mouse"]
// const [tv,ac,f,m] = product
// console.log(tv);

// const pro = {
//     "TV" : "Rs.99,999",
//     "AC" : "Rs.55,000",
//     "FAN" : "Rs.9,999",
// }
// const {TV,AC,FAN} = pro
// console.log(TV);

// 11. Create a class named Product with the following attributes: name, productId, price, and a
// displayDetails method. Provide code to access and display these details for a product.

// class Product {
//     name = "Mobile"
//     productID = 7
//     price = 55000

//     displayDetails(){
//         console.log(this.name);
//         console.log(this.productID);
//         console.log(this.price);
//     }
// }
// const pro = new Product();
// pro.displayDetails();

//Q12 Create a user-defined exception called InvalidCouponCode and demonstrate how it is used
// when a customer tries to apply an invalid coupon code during checkout.

// class InvalidCouponCode extends Error{
//     constructor(message){
//         super(message)
//         this.name = "InvalidCouponCode"
//         this.message = "Enter a valid coupon"
//     }
// }
// function checkout(coupon){
//     try{
//         if(coupon){
//             throw new InvalidCouponCode();
//         } else {
//             console.log("Coupon validated..!");
//         }
//     } catch(error){
//         console.log(error.name+" : "+error.message);
//     }
// }
// checkout(true);

//Q13 Show an example of throw where a function throws an exception if a product's quantity in
// the inventory falls below a certain threshold (e.g., less than 5 units)

//  class ThresholdError extends Error{
//     constructor(message){
//         super(message)
//         this.name = "ThresholdError"
//         this.message = "Threshold limit falls below 5 units."
//     }
// }
// function thresholdLimit(threshold){
//     try{
//         if(threshold<5){
//             throw new ThresholdError();
//         } else {
//             console.log("Threshold Limit = "+threshold);
//         }
//     } catch(error){
//         console.log(error.name+" : "+error.message);
//     }
// }
// thresholdLimit(6);

//Q14 Demonstrate an example of a Promise that simulates fetching product details (e.g., name,
// price, availability) from an online store's server.

//Q15 Demonstrate an example of async and await to simulate fetching and displaying a
// customer's order history from an online shopping system.

//Q16 Write a function to filter students with marks greater than 80 from an array of student
// objects. 

// const marks = [99,80,60,89];
// let filterMarks = marks.filter((marks)=>{
//     return marks>80;
// })
// console.log(filterMarks);

// 17. Write a program to find the total marks scored by all students in a class.

// const marks = [99,80,60,89];
// let totalMarks = marks.reduce((marks,tot)=>{
//     return marks+tot
// })
// console.log(totalMarks);

// 18. Demonstrate Example for
// a. Import/Export
// b. Require/ Module.Exports

// export const a = 18;
// export function add(a,b){
//     return a+b
// }

//  module.export = {a,add}

// 19. Implement an anonymous function assigned to the variable increaseMarks that takes an
// array of marks as a parameter and increases each mark by 10.

// const marks = [99,80,60,89];
// let increaseMarks = marks.map((marks)=>{
//     return marks+10
// })
// console.log(increaseMarks);

// 20. Perform CRUD Operations on Employee Domain:
// a. Id auto_increment primary key
// b. Name varchar(30)
// c. Salary
// d. Dept

// const mysql = require('mysql');
// const { log, error } = require('node:console');

// const db = mysql.createConnection({
//     host : "localhost",
//     user : "root",
//     password : "",
//     database : "db"
// })

// db.connect ((err)=>{
//     if(err){
//         throw err
//     }
//     console.log("Connected to the databse......");
// })

// function insertData(id,name,salary,dept){
//     const sql ="insert into employee (id,name,salary,dept) values(?,?,?,?) ";
//     db.query(sql,[id,name,salary,dept],(err,result)=>{
//         if (err) {
//             throw err
//         } else {
//             console.log("Data Inserted ",result.insertId);
//         }
//     })
// }

// insertData(7,"Sahil",25000,"IT");
// insertData(17,"Sneha",35000,"cs");

// function deleteData(id){
//     const sql ="delete from employee (id) values(?) ";
//     db.query(sql,[id],(err,result)=>{
//         if (err) {
//             throw err
//         } else {
//             console.log("Data Inserted ",result.insertId);
//         }
//     })
// }

// deleteData(7);

// function showData(){
//     const sql ="select from employee";
//     db.query(sql,(err,result)=>{
//         if (err) {
//             throw err
//         } else {
//             console.log("Data Inserted ",result.insertId);
//         }
//     })
// }

// showData();

// function searchData(id){
//     const sql ="select from employee where id=?  ";
//     db.query(sql,[id],(err,result)=>{
//         if (err) {
//             throw err
//         } else {
//             console.log("Data Inserted ",result.insertId);
//         }
//     })
// }

// searchData(7);



