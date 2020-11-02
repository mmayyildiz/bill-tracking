import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getPayments } from '../../store/paymentActions';
import { Link } from "react-router-dom";
import Payment from '../../components/Payment/Payment';
import Header from '../../components/Header/Header';
import './style.css'

const Dashboard = ({payments, getPayments}) => {
   
    useEffect(()=>{
        getPayments()
    }, []);

    return (
      <React.Fragment> 
        <Header title="Regular Payments"/>
        <div className="content">
          { payments && payments.map( (payment, index) => <Payment key={index} {...payment}/>) } 
          <div className="btn-container">
            <Link to={'/addPayment'} className='btn btn-green'>
              Add a Bill
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
}

const mapStateToProps = ({ payments }) => {
    return { payments };
}

export default connect(mapStateToProps, {getPayments})(Dashboard);