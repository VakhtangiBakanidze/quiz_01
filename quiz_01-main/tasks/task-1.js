/*
შექმენით მარტივი მემკვიდრეობის სისტემა პროტოტიპების გამოყენებით:

1. შექმენით ბაზისური ობიექტი სახელად 'Animal' შემდეგი თვისებებით:
   - სახელი (string)
   - ასაკი (number)
   - makeSound() მეთოდი, რომელიც აბრუნებს "Some sound"
   

2. შექმენით 'Dog' ობიექტი, რომელიც მემკვიდრეობით იღებს 'Animal'-დან და დაამატება:
   - ჯიში (string)
   - makeSound() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და აბრუნებს "Woof!"

3. შექმენით 'Cat' ობიექტი, რომელიც მემკვიდრეობით იღებს 'Animal'-დან:
   - ფერი (string)
   - makeSound() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და აბრუნებს "Meow!"

მოთხოვნები:
- გამოიყენეთ პროტოტიპული მემკვიდრეობა
- ყველა ობიექტს უნდა ჰქონდეს საკუთარი კონსტრუქტორი ფუნქცია ან კლასი
*/

// თქვენი კოდი აქ
// 1 Task
function Animal(name,age) {
   return {
    name: name,
    age: age,
    makeSound: function() {
    return "Some sound";
       }
   };
}

//2 TASK
function Dog(name,age,breed) {
   const dog=  Object.create(Animal(name, age));
   dog.breed= breed;
   dog.makeSound=function() {
   return "Woof!";
   };
   return dog;
}
//3 TASK
function Cat(name,age,color) {
   const cat=Object.create(Animal(name, age));
   cat.color= color;
   cat.makeSound=function() {
   return "Meow!";
   };
   return cat;
}
// ტესტის შემთხვევები
const dog = new Dog("Rex", 3, "German Shepherd");
const cat = new Cat("Whiskers", 2, "Gray");

console.log(dog.name); // უნდა დაბეჭდოს: "Rex"
console.log(dog.age); // უნდა დაბეჭდოს: 3
console.log(dog.breed); // უნდა დაბეჭდოს: "German Shepherd"
console.log(dog.makeSound()); // უნდა დაბეჭდოს: "Woof!"

console.log(cat.name); // უნდა დაბეჭდოს: "Whiskers"
console.log(cat.age); // უნდა დაბეჭდოს: 2
console.log(cat.color); // უნდა დაბეჭდოს: "Gray"
console.log(cat.makeSound()); // უნდა დაბეჭდოს: "Meow!"


