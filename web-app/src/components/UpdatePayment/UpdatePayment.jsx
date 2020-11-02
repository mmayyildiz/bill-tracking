import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getPayment, updatePayment, deletePayment} from '../../store/paymentActions'
import Header from '../Header/Header';
import Message from '../Message/Message';
import './style.css'

const UpdatePayment = ({getPayment, errors ,payment, updatePayment, deletePayment, match, history}) => {

    const [newPayment, setNewPayment] = useState({id: '', name: '', amount:'', frequency: '', startDate: ''});

    const headerProps = {
        title: 'Edit A Bill',
        subTitle: payment && payment.name,
        description: "If you’d like to edit your bill you can change the details below"
    }

    useEffect(()=>{
        const { id } = match.params;
        getPayment(id, history);  
    }, []);

    useEffect(()=>{
        if(errors){
            const obj = {error: errors}
            setNewPayment((prevState) => ({...prevState, ...obj}));
        }else{
            if(payment){
                setNewPayment(payment)
            }
        }
    }, [payment]);


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
            id: newPayment.id,
            name: newPayment.name,
            amount: newPayment.amount,
            startDate: newPayment.startDate, 
            frequency: newPayment.frequency
          };
          updatePayment(payment, history);
        }else{
          const message = {message: 'All fields must be filled!'}
          setNewPayment((prevPayment) => ({ ...prevPayment, ...message }));
        }

    }


    const onDelete = () => {
        if (
            window.confirm(
              'Are you sure? This will delete the payment record'
            )
          ) {
            deletePayment(newPayment.id, history);
          }
    }

    const {name, amount, startDate, frequency, message} = newPayment;

    return (
        <React.Fragment>
               <Header {...headerProps} />
               <div className="content">
                <div className="form" onSubmit={onSubmit}>
                    <input className="form-text-input" type="text" name="name" placeholder="Name" onChange={onChange} value={name}/>
                    <input className="form-text-input" type="text" name="amount" placeholder="Amount" onChange={onChange} value={amount}/>
                    <input className="form-text-input" type="date" name="startDate" placeholder="Start Date" onChange={onChange} value={startDate}/>
                    <select className="form-text-input" name="frequency" value={frequency} placeholder="Frequency" onChange={onChange}>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Annually</option>
                  </select>
                    <div className="btn-container">
                        <input className="btn btn-green" type="button" value="Save" onClick={onSubmit}/>
                        <input className="btn btn-red" type="button" value="Delete" onClick={onDelete}/>
                    </div>
                 </div>
                   { message && <Message msg={message} /> }
                </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    payment: state.payment,
  });
  

export default connect(mapStateToProps, { getPayment, updatePayment, deletePayment })(UpdatePayment);

