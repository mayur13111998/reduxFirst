const product = {
  total: 0,
  customer_id: 0,
  products: [],
};

const CartReducer = (state = product, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER_ID":
      return { ...state, customer_id: Number(action.payload) };
    case "Add_ORDER_ITEMS":
      let {
        product_id,
        product_name,
        product_price,
        quantity,
        product_total_price,
      } = action.payload;
      let total_product_amount = quantity * product_price;
      let total_price = state.total + total_product_amount;
      if (state.products.length === 0) {
        return {
          ...state,
          total: total_price,
          products: [
            ...state.products,
            {
              product_id,
              product_name,
              product_price,
              quantity,
              product_total_price: total_product_amount,
            },
          ],
        };
      } else {
        let productAll = state.products;
        let find2 = false;
        let indexmain = 0;
        productAll.map((data, index) => {
          if (data.product_id === product_id) {
            find2 = true;
            indexmain = index;
            let pri = quantity * state.products[indexmain].product_price;

            let total_main =
              state.total - state.products[indexmain].product_total_price;
            state.total = total_main + pri;
            state.products[indexmain].quantity = quantity;
            state.products[indexmain].product_total_price = pri;
          }
        });

        if (find2) {
          return state;
        } else {
          return {
            ...state,
            total: total_price,
            products: [
              ...state.products,
              {
                product_id,
                product_name,
                product_price,
                quantity,
                product_total_price,
              },
            ],
          };
        }
      }
    case "REMOVE_PRODUCT":
      let product_price2 = {
        ...state,
        products: [
          ...state.products.filter((id) => id.product_id === action.payload),
        ],
      };
      let total2 = state.total - product_price2.products[0].product_total_price;
      return {
        ...state,
        total: total2,
        products: [
          ...state.products.filter((id) => id.product_id !== action.payload),
        ],
      };
    case "CART_PRODUCT_QUANTITY_INCREMENR":
      let findPro = state.products.find(
        (product) => product.product_id === action.payload
      );
      let index = state.products.findIndex(
        (product) => product.product_id === action.payload
      );
      findPro.quantity += 1;
      state.products[index] = findPro;

      let pri = findPro.quantity * findPro.product_price;
      state.total = state.total - findPro.product_total_price;
      findPro.product_total_price = pri;
      return {
        ...state,
        total: state.total + pri,
      };
    case "CART_PRODUCT_QUANTITY_DECREMENT":
      let findPro2 = state.products.find(
        (product) => product.product_id === action.payload
      );
      let index2 = state.products.findIndex(
        (product) => product.product_id === action.payload
      );
      if (findPro2.quantity === 1) {
        return state;
      } else {
        findPro2.quantity -= 1;
        state.products[index2] = findPro2;

        let pri2 = findPro2.quantity * findPro2.product_price;
        state.total = state.total - findPro2.product_total_price;
        findPro2.product_total_price = pri2;
        return {
          ...state,
          total: state.total + pri2,
        };
      }
    default:
      return state;
  }
};
export default CartReducer;
