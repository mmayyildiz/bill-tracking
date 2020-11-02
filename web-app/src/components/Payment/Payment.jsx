import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import './style.css'

const Payment = ({id, name, frequency, amount, startDate}) => {

  const calculateNextDay = () => {

    if(startDate){

      const frequencyStr = (frequency === 'Weekly' && 'week') || (frequency === 'Monthly' && 'month') || (frequency === 'Annually' && 'year')

      let dueDate = moment(startDate);
      
      while(dueDate < moment()){
        dueDate.add(1, frequencyStr);
      }

      return moment(dueDate).format('LL');
     } else {
        return '';
    }

 }

    return (
        <Link to={`/updatePayment/${id}`} className="link"> 
          <div className="payment">
            <div>
              <div className="name"> { name } </div> 
              <div className="frequency"> { frequency } </div>
            </div>
            <div>
              <div className="amount"> { amount } </div>
              <div className="dueDate"> Next: { calculateNextDay() } </div>
            </div>
          </div>
        </Link>
    );
}

export default Payment;