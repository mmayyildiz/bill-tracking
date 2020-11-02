import axios from 'axios';
import { DELETE_PAYMENT, GET_PAYMENT, GET_PAYMENTS, GET_ERRORS } from './types';

export const createPayment = (payment, history) => async dispatch => {

   try{
         await axios.post('/payments', payment);
         history.push('/');
         dispatch({
             type: GET_ERRORS,
             payload: {}
         })
    } catch(err) {
       console.log('createPayment - Error ', err);
    }
}

export const updatePayment = (payment, history) => async dispatch => {
    try{
         await axios.patch(`/payments/${payment.id}`, payment);
         history.push('/');
         dispatch({
             type: GET_ERRORS,
             payload: {}
         })
    } catch(err) {
      console.log('updatePayment - Error ', err);
    }
}

export const getPayments = () => async dispatch => {
    const res = await axios.get('/payments');
    dispatch({
      type: GET_PAYMENTS,
      payload: res.data
    });
  };
  
  export const getPayment = (id, history) => async dispatch => {
    try {
      const res = await axios.get(`/payments/${id}`);
      dispatch({
        type: GET_PAYMENT,
        payload: res.data
      });
    } catch (error) {
      history.push('/dashboard');
    }
  };
  
  export const deletePayment = (id, history) => async dispatch => {

      await axios.delete(`/payments/${id}`);
      history.push('/');
      dispatch({
        type: DELETE_PAYMENT,
        payload: id
      });
    
  };
  