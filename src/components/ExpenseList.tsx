import React, {FC} from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
// import '../styles/styles.css';

type PropsExpenses={
 
     dispatch:any,
     expenses:waiverType[]
}
type waiverType={
    id:string,
    amount:number,
    createdAt:number,
    description:string,
    note:string
}

export const ExpenseList:FC<PropsExpenses>=({dispatch,expenses})=>{    
  
    return(
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
            {            
                expenses.length===0?(
                   <div className="list-item list-item--message">
                      <span>No expenses</span> 
                   </div>
                ):(                      
                    expenses.map((expense)=>{ 
                        <h1>Expenses</h1>        
                        return <ExpenseListItem key={expense.id} {...expense}/>
                    })            
                )
            }
            </div>
        </div>
    );
}
const mapStateToProps=(state:any)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);