import { GET_PAYMENTS, GET_PAYMENT, DELETE_PAYMENT } from "./types";

const initialState = {
  payments: [],
  payment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PAYMENTS:
      return {
        ...state,
        payments: action.payload
      };
    case GET_PAYMENT:
      return {
        ...state,
        payment: action.payload
      };
    case DELETE_PAYMENT:
      return {
        ...state,
        projects: state.payments.filter(
          payment => payment.id !== action.payload
        )
      };
    default:
      return state;
  }
}
