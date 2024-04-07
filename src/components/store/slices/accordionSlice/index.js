import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Bridal",
    items: [
      "Cutii verighete",
      "Umerase miri",
      "Semne masa",
      "Albume foto",
      "Ochelari petrecere",
    ],
  },
  {
    category: "Cadouri",
    items: ["Sticle personalizate"],
  },
  {
    category: "Craciun",
    items: ["Globuri personalizate"],
  },
  {
    category: "Despre",
    items: ["Despre noi"],
  },
];
const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState,
});

export default accordionSlice;
