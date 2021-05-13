// Expense Reducer

export const expensesReducerDefaultState=[];

export default (state=expensesReducerDefaultState,action:any)=>{
    switch(action.type){
        case "ADD_EXPENSE":   
            
            return [
                ...state,
                action.expense
            ]
            case "REMOVE_EXPENSE":
                return state.filter(({id})=>id!==action.id)
                case 'EDIT_EXPENSE':
                    return state.map((expense:any)=>{
                        if(expense.id===action.id){
                           return{
                               ...expense,
                               ...action.updates
                           }
                        }
                        else{
                            return expense;
                        }
                    })
            
        default:
            return state;
    }
}
