import React,{FC} from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


type AddExpenseProps={
  expense:expenses,
  match:{
      params:{
          id:string
      }
  },
  history:{
      push:any
  },
  dispatch:any
};

type expenses={
  id:string,
  description:string,
  createdAt:number,
  note:string,
  amount:number
}

const AddExpensePage:FC<AddExpenseProps>=(props)=>(
    <div>
        <div className="page-header">
          <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>    
        <div className="content-container">
        <ExpenseForm 
           expense={props.expense}
           onSubmit={(expense:any)=>{
           props.dispatch(addExpense(expense));
           props.history.push('/');
       }}
       />
            </div>   
      
    </div>
)

export default connect()(AddExpensePage);