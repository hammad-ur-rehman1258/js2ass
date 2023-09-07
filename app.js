// //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1+num2;
// document.write("sum of " + num1 + " and "+ num2 + " is " + result);

// //2. Repeat task1 for subtraction, multiplication, division & modulus.
// //for subtraction
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1-num2;
// document.write("subtraction of " + num1 + " and "+ num2 + " is " + result);

// //for multiplication
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1*num2;
// document.write("multiplication of " + num1 + " and "+ num2 + " is " + result);

// //for division
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1/num2;
// document.write("division of " + num1 + " and "+ num2 + " is " + result);

// //for modulus
// var num1=+prompt("first number");
// var num2=+prompt("second number");
// var result= num1%num2;
// document.write("modulus of " + num1 + " and "+ num2 + " is " + result);

// //3. Do the following using JS Mathematic Expressions
// //a. Declare a variable.
// var var1;
// //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is " + var1);
// //c. Initialize the variable with some number.
// var1= 5;
// //d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("<br>Initial value: " + var1);
// //e. Increment the variable.
// var1++;
// //f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("<br>Value after increment is: " + var1);
// //g. Add 7 to the variable.
// var1=var1+7;
// //h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.write("<br>Value after addition is: "+var1);
// //i. Decrement the variable.
// var1--;
// //j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("<br>Value after decrement is: " + var1);
// //k. Show the remainder after dividing the variable’s value by 3. 
// var1=var1%3;
// //l. Output : “The remainder is : 0”.
// document.write("<br>The remainder is : " + var1);

// //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// var TicketPrice=600;
// var TotalCost=TicketPrice*5;
// document.write("Total cost to buy 5 tickets to a movie is "+TotalCost+"PKR");

// //5. Write a script to display multiplication table of any number in your browser.
// var x=3,i,y;
// document.write("Table of 3");
// for(i=1;i<=10;i++){
//     y=x*i;
//     document.write("<br>3*"+i+"="+y);
// }

// //6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// //a. Store a Celsius temperature into a variable.
// var tempC=25;
// //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// var tempF=((tempC*9/5)+32);
// document.write(tempC+"°C is "+tempF+"°F<br>");
// //c. Now store a Fahrenheit temperature into a variable.
// var tempF2=70;
// //d. Convert it to Celsius & output “NNoF is NNoC”.
// var tempC2=((tempF2-32)*5/9);
// document.write(tempF2+"°F is "+tempC2+"°C");

// // 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1
// // b. Price of item 2
// // c. Ordered quantity of item 1
// // d. Ordered Quantity of item 2
// // e. Shipping charges
// // Compute the total cost & show the receipt in your browser.
// var item1=650;
// var item2=100;
// var Quantity1=3;
// var Quantity2=7;
// var Shipping=100;
// var Total=((item1*Quantity1)+(item2*Quantity2)+Shipping);
// document.write("Price of item 1 is "+item1);
// document.write("<br>Quantity of item 1 is "+Quantity1);
// document.write("<br>Price of item 2 is "+item2);
// document.write("<br>Quantity of item 2 is "+Quantity2);
// document.write("<br>Shipping charges "+ Shipping);
// document.write("<br>Total cost of your order is "+Total);


// //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// var TotalMarks=980;
// var MarksObt=804;
// var percent=((MarksObt*100)/TotalMarks);
// document.write("Total Marks: "+TotalMarks);
// document.write("<br>Marks Obtained: "+ MarksObt);
// document.write("<br>Percentage: "+percent+"%");

// //9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// var USD=10;
// var SR=25;
// var PKR=((USD*104.80)+(SR*28));
// document.write("Total currency in PKR: "+PKR);

// //10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expression
// var num=10;
// var result=(((num+5)*10)/2);
// document.write(result);

// //11. The Age Calculator: Forgot how old someone is? Calculate it!
// //a. Store the current year in a variable.
// var CurrentYear=+prompt("Current Year");
// //b. Store their birth year in a variable.
// var BirhtYear=+prompt("Birth Year");
// //c. Calculate their 2 possible ages based on the stored values.
// var age=CurrentYear-BirhtYear;
// document.write("Current year: "+CurrentYear);
// document.write("<br>Birth year: "+BirhtYear);
// document.write("<br>Your age is: " +age);


// //12. The Geometrizer: Calculate properties of a circle.
// var radius=20;
// var circumference=(2*3.142*radius);
// var area=(3.142*(radius*radius));
// document.write("Radius of s circle: "+radius);
// document.write("<br>The circumference is: "+circumference);
// document.write("<br>The area is: "+area);

// //13. The Lifetime Supply Calculator
// var snack="novita";
// var age=20;
// var MaxAge=70;
// var amount=2;
// var total=((MaxAge-age)*12*30*amount);
// document.write("Favourite Snack: "+snack);
// document.write("<br>Current Age: "+age);
// document.write("<br>Estimated Maximum Age: "+MaxAge);
// document.write("<br>Amount of snacks per day: "+amount);
// document.write("<br>You will need "+total+" "+ snack+" to last you until the ripe old age of "+MaxAge);



























