import Tshirt from "../assets/images/clothes.webp";

const productsData = [
  {
    id: 0,
    name: "Pants",
    detail: "These are simple pants in black.",
    img: Tshirt,
    moreImage: [],
  },
  {
    id: 1,
    name: "Shoes",
    detail: "These are simple shoess in black ",
    img: Tshirt,
  },
  {
    id: 2,
    name: "Hats",
    detail: "These are simple hats in black ",
    img: Tshirt,
  },
  {
    id: 3,
    name: "Bags",
    detail: "These are simple bags in black",
    img: Tshirt,
  },
  {
    id: 4,
    name: "Slippers",
    detail: "These are simple slippers in black",
    img: Tshirt,
  },
  {
    id: 5,
    name: "Pants",
    detail: "These are simple pants in black ",
    img: Tshirt,
    moreImage: [],
  },
  {
    id: 6,
    name: "Shoes",
    detail: "These are simple shoess in black ",
    img: Tshirt,
  },
  {
    id: 7,
    name: "Jewellery",
    detail: "These are simple jewellery",
    img: Tshirt,
  },
  {
    id: 8,
    name: "Bags",
    detail: "These are simple bags",
    img: Tshirt,
  },
  {
    id: 9,
    name: "Slippers",
    detail: "These are slippers",
    img: Tshirt,
  },
];

export function getBrowsingData() {
  return productsData;
}

export function getProduct(id) {
  let tempProduct = {};
  for (let i = 0; i < productsData.length; i++) {
    if (productsData[i].id === id) {
      return productsData[i];
    }
  }
  return tempProduct;
}