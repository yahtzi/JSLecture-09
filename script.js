//Instantiate a new array and add 5 numeric values to it then add console.log statements that output first and last values from the array.//

let myDogDouglas = ["Cute", "Precious", "Baby", "Prince", "Angel"];

console.log(myDogDouglas[0]);
console.log(myDogDouglas[4]);


//Using a for loop containing a console.log statement, output each of the values in the array.//

for (d = 0; d <= myDogDouglas.length - 1; d++) {
    console.log(myDogDouglas[d]);
}

//Use the push method to add 5 more values to your array then use pop statement 3 times on you r array.//

myDogDouglas.push("Annoying");
myDogDouglas.push("Demon");
myDogDouglas.push("Loud");
myDogDouglas.push("Violent");
myDogDouglas.push("Cloud");

console.log(myDogDouglas);

myDogDouglas.pop();
myDogDouglas.pop();
myDogDouglas.pop();
myDogDouglas.pop();
myDogDouglas.pop();

console.log(myDogDouglas);

//Declare a new string variable "myString" and place a string of your choosing inside and output with a console.log statement.//
let myCatJunie = "We rescued Junie from under a semi-truck";
console.log(myCatJunie.length);