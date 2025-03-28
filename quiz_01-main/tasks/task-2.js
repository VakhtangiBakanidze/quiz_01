/*
მოცემულია პროდუქტების მასივი, განახორციელეთ შემდეგი ფუნქციები:

1. filterExpensiveProducts(products, priceThreshold)
   - გაფილტრეთ პროდუქტები, რომლებიც ღირს უფრო მეტი ვიდრე ზღვარი
   - დააბრუნეთ მხოლოდ პროდუქტების სახელები

2. applyDiscount(products, discountPercentage)
   - გამოიყენეთ ფასდაკლება ყველა პროდუქტზე
   - დააბრუნეთ ახალი მასივი ფასდაკლებული ფასებით
   - ორიგინალი ფასები უნდა დარჩეს უცვლელი

3. getAvailableProducts(products)
   - გაფილტრეთ პროდუქტები, რომლებიც არის საწყობში (stock > 0)
   - დააბრუნეთ მხოლოდ სახელი და ფასი

მოთხოვნები:
- გამოიყენეთ map() და filter() მასივის მეთოდები
- არ შეცვალოთ ორიგინალი მასივები
- დააბრუნეთ ახალი მასივები ტრანსფორმირებული მონაცემებით
*/

const products = [
  { name: "Laptop", price: 1200, stock: 5 },
  { name: "Phone", price: 800, stock: 0 },
  { name: "Tablet", price: 500, stock: 3 },
  { name: "Watch", price: 200, stock: 10 },
  { name: "Headphones", price: 150, stock: 2 },
];

// თქვენი კოდი აქ

function filterExpensiveProducts(products, priceThreshold) {
  //
  let filteredProducts = products.filter((product) => product.price > priceThreshold).map((product) => product.name);
  return filteredProducts;
}



function applyDiscount(products, discountPercentage) {
  //
  let discounted = products.map(element => {
    let prices = element.price * discountPercentage/100;
    discountedPrice: prices
    return prices;
    })
  return discounted
}

function getAvailableProducts(products) {
  //
  let filter = products.filter((element) => element.stock > 0).map((product) => product.name && product.price);
  return filter;
}

console.log(filterExpensiveProducts(products, 600));

console.log(applyDiscount(products, 20));

console.log(getAvailableProducts(products));
