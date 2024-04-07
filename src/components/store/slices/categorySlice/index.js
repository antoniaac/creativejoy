import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Bridal", "Cadouri Personalizate", "Craciun", "Despre"];
const categorySlice = createSlice({
  name: "Category",
  initialState: initialState,
});

export default categorySlice;
