import React,{FC} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

type EditExpenseProps={
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

const EditExpensePage:FC<EditExpenseProps>=(props)=>{    
    return (
        <div>
            <div className="page-header">
              <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
              </div>
            </div>
            <div className="content-container">
            <ExpenseForm
            expense={props.expense}
            onSubmit={(expense:any)=>{                
                props.dispatch(editExpense(expense.id,expense));
                props.history.push('/');
            }}
            />
            <button className="button button--secondary" onClick={()=>{
            props.dispatch(removeExpense({id:props.expense.id}));
            props.history.push('/');
        }}>Remove Expense</button>
            </div>            
        </div>
    );
};

const mapStateToProps=(state:any,props:any)=>{    
    return{        
        expense:state.expenses.find((expense:any)=>expense.id===props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);

