const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

// Реализовать функцию, которая принимает на вход массив с данными (товары) и рендерит на страницу карточки товар

// const productName = document.createElement("h2");
// productName.innerText = products[0].name
// document.body.append(productName);

// const productBrand = document.createElement("h3");
// productBrand.innerText = products[0].brand
// document.body.append(productBrand);

const renderList = (arr, arr1, arr2) => {

  const productName = document.createElement("h2");
  productName.innerText = arr1
  document.body.append(productName);

  const productBrand = document.createElement("h3");
  productBrand.innerText = arr2
  document.body.append(productBrand);
    
  const list = document.createElement('ul');
  arr.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    list.append(listItem);
  })
  document.body.append(list)
};

renderList(products[0].properties, products[0].name, products[0].brand)
renderList(products[1].properties, products[1].name, products[1].brand)
renderList(products[2].properties, products[2].name, products[2].brand)
