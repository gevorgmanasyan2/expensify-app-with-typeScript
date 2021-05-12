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
    // console.log("expenseProps", props);
    // console.log("expenseProps.expense", expenseProps.expense);  
    // console.log("expense.expense.id", expense.expense.id);  
    // console.log("expense.match", expense.match);
    // console.log("expense.dispatch", expense.dispatch);
    // console.log("expense.history", expense.history);
    

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
                // console.log("updated", expense);
                // console.log("updated expense.id", expense.id);
                // console.log("updated expense.expense.id", expense.expense);
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
    // console.log(state);
    return{
        
        
        expense:state.expenses.find((expense:any)=>expense.id===props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);

// export default EditExpensePage;