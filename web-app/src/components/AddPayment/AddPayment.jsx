import React, {useState} from 'react';
import { connect } from 'react-redux';
import {createPayment} from '../../store/paymentActions'
import Header from '../Header/Header';
import Message from '../Message/Message';
import './style.css'

const AddPayment = ({ createPayment, history }) => {

    const [newPayment, setNewPayment] = useState({name: '', amount:'', frequency: 'Monthly', startDate: ''});

    const headerProps = {
        title: "Add A Bill",
        subTitle: "Enter your details",
        description: "Keep track of your household spending by adding your bills"
    }

    const onChange = (e) => {
   
        if(e.target.name === 'amount'){

          if(e.target.value === '£'){
            const obj = {[e.target.name]: ''};
            setNewPayment((prevPayment) => ({ ...prevPayment, ...obj }));
          } else{
            const inputVal = (e.target.value.length > 1 && (e.target.value).substring(1)) || e.target.value;
            const isNumber = e.target.value !== '' && !isNaN(inputVal);
             if(isNumber) {
                 const obj = {[e.target.name]: '£'+ inputVal};
                 setNewPayment((prevPayment) => ({ ...prevPayment, ...obj }));
             }
          }

        } else{
          const value = {[e.target.name]: e.target.value};
          setNewPayment((prevPayment) => ({ ...prevPayment, ...value }));
        }
     
    }

    const onSubmit = (e) => {

        e.preventDefault();
        const isValid = newPayment.name && newPayment.amount && newPayment.startDate && newPayment.frequency;
          
        if(isValid){
          const payment = {
            name: newPayment.name,
            amount: newPayment.amount,
            startDate: newPayment.startDate, 
            frequency: newPayment.frequency
          };
          createPayment(payment, history);
        }else{
          const message = {message: 'All fields must be filled!'}
          setNewPayment((prevPayment) => ({ ...prevPayment, ...message }));
        }
    }

    const {name, amount, startDate, frequency, message} = newPayment;

    return (
        <React.Fragment>
                <Header {...headerProps} />
                <div className="content">
                  <div className="form">
                    <input className="form-text-input" type="text" name="name" placeholder="Name" onChange={onChange} value={name}/>
                    <input className="form-text-input" type="text" name="amount" placeholder="Amount" onChange={onChange} value={amount} />
                    <input className="form-text-input" type="date" name="startDate" placeholder="Start Date" onChange={onChange} value={startDate}/>
                    <select className="form-text-input" name="frequency" value={frequency} placeholder="Frequency" onChange={onChange}>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Annually">Annually</option>
                    </select>
                    <div className="btn-container">
                        <input type="button" className="btn btn-green" onClick={onSubmit} value="Add new payment" />
                    </div>
                  </div>
                  { message && <Message msg={message} /> }
                </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    errors: state.errors
  });
  

export default connect(mapStateToProps, { createPayment })(AddPayment);
