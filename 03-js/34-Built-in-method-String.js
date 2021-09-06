// Substring(),substr()
// replace()
// split()
// trim()
// toUppercase(),toLowerCase()
// indexOf(),includes()

let quote = "With great power comes great responsibility";
console.log(quote.substring(11, 16));
console.log(quote.substring(11, 5)); //here we have put no of characters i.e 5
console.log(quote.indexOf("power"));
console.log(quote.indexOf("King")); //-1
console.log(quote.indexOf("great"));
console.log(quote.indexOf("great", 15));
console.log(quote.includes("comes")); //true
console.log(quote.includes("hello")); //false

//replace
let res = quote.replace("responibility", "Electricity bill");
console.log(quote);
console.log(res);

//trim--> remove leading & trailing spaces
let input = "    Harry potter";
console.log(input.length);
console.log(input.trim);
console.log(input.trim.length);
