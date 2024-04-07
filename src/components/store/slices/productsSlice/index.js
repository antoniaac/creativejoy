import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    pName: "semn de masa",
    price: 20,
    img: "prod1.jpeg",
  },
  {
    pName: "set pahare miri",
    price: 20,
    img: "prod2.jpeg",
  },
  {
    pName: "semn de masa",
    price: 20,
    img: "prod3.jpeg",
  },
  {
    pName: "semn de masa",
    price: 20,
    img: "prod4.jpeg",
  },
  {
    pName: "semn de masa ",
    price: 20,
    img: "prod5.jpeg",
  },
  {
    pName: "set pahare miri",
    price: 20,
    img: "prod6.jpeg",
  },
  {
    pName: "semn de masa",
    price: 20,
    img: "prod7.jpeg",
  },
  {
    pName: "semn de masa ",
    price: 20,
    img: "prod8.jpeg",
  },
  {
    pName: "umeras mire",
    price: 20,
    img: "prod9.jpeg",
  },
  {
    pName: "umeras mireasa",
    price: 20,
    img: "prod10.jpeg",
  },
  {
    pName: "umeras ",
    price: 20,
    img: "prod11.jpeg",
  },
  {
    pName: "umeras",
    price: 20,
    img: "prod12.jpeg",
  },
  {
    pName: "umeras",
    price: 20,
    img: "prod13.jpeg",
  },
  {
    pName: "umeras",
    price: 20,
    img: "prod14.jpeg",
  },
  {
    pName: "album ",
    price: 20,
    img: "prod15.jpeg",
  },
  {
    pName: "set umerase",
    price: 20,
    img: "prod16.jpeg",
  },
  {
    pName: "cutie verighete",
    price: 20,
    img: "prod17.jpeg",
  },
  {
    pName: "guest book",
    price: 20,
    img: "prod18.jpeg",
  },
  {
    pName: "cutie verighete",
    price: 20,
    img: "prod19.jpeg",
  },
  {
    pName: "cutie verighete",
    price: 20,
    img: "prod20.jpeg",
  },
  {
    pName: "cutie verighete",
    price: 20,
    img: "prod21.jpeg",
  },
  {
    pName: "cutie verighete",
    price: 20,
    img: "prod22.jpeg",
  },
  {
    pName: "cutie verighete",
    price: 20,
    img: "prod23.jpeg",
  },
];
const productsSlice = createSlice({
  name: "Products",
  initialState: initialState,
});

export default productsSlice;
