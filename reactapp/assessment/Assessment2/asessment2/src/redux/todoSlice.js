import { createSlice } from "@reduxjs/toolkit";
import { BrowsingData } from "../api/main";
import getDenimimg from "../api/clothing";
import OppoA31 from "../api/oppo";

const cardslice = createSlice({
  name: "cards",
  initialState: {
    search: "",
    sizeOfCart: 0,
    listOfAllObject: BrowsingData(),
    listOfOppoObject: OppoA31(),
    listOfClothesObject: getDenimimg(),
    listOfCartObject: [],

  },
  reducers: {
    onSearchChanging(state, action) {
      state.search = action.payload;
    },
    incrementCart(state, action) {
      state.sizeOfCart += 1;
    },
    decrementCart(state, action) {
      state.sizeOfCart -= 1;
    },
    handleincrese1(state, action) {
      const productexit = state.listOfAllObject.find(
        (item) => item.id === action.payload
      );

      state.listOfAllObject = state.listOfAllObject.map((item) =>
        item.id === action.payload
          ? { ...productexit, quantity: productexit.quantity + 1 }
          : item
      );
    },
    handledecrese1(state, action) {
      const productexit = state.listOfAllObject.find(
        (item) => item.id === action.payload
      );

      state.listOfAllObject = state.listOfAllObject.map((item) =>
        item.id === action.payload
          ? {
            ...productexit,
            quantity:
              productexit.quantity === 0
                ? productexit.quantity
                : productexit.quantity - 1,
          }
          : item
      );
    },

    handleproduct2(state, action) {
      const productexit = state.listOfCartObject.find(
        (item) => item.id === action.payload.id
      );
      if (productexit) {
        state.listOfCartObject = state.listOfCartObject.map((item) =>
          item.id === action.payload.id ? { ...productexit } : item
        );
      } else {
        state.listOfCartObject = [
          ...state.listOfCartObject,
          { ...action.payload },
        ];
      }
    },

    handleremove2(state, action) {
      const productexit = state.listOfAllObject.find(
        (item) => item.id === action.payload.id
      );
        
      if (productexit.quantity === 0) {
        state.listOfCartObject = state.listOfCartObject.filter((item) =>
          item.id !== action.payload.id
        );
      } else {
        state.listOfCartObject = state.listOfCartObject.map((item) =>
          item.id === action.payload.id ? { ...productexit }:item
        );
      }
      console.log(productexit.quantity);
    },


  },
});

export const {
  onSearchChanging,
  incrementCart,
  decrementCart,
  handledecrese1,
  handleincrese1,
  handleproduct2,
  handleremove2,
} = cardslice.actions;
export default cardslice.reducer;