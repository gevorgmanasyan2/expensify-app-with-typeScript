import React, {FC} from 'react';
// for using date we mast install 3 moduls`
// 1.moment 2.react-dates@12.3.0(the latest version give some errors!)  3.react-addons-shallow-compare
import moment from 'moment';
import {SingleDatePicker,FocusedInputShape} from 'react-dates';

interface ExpenseProps{
    expense:{
        id:string,
        description:string,
        createdAt:number,
        note:string,
        amount:number,      
    },
    onSubmit:any,  
};
interface MyState{   
    id:string,   
    description:string,
    createdAt:any,
    note:string,
    amount:any,
    calendarFocused:any,
    error:string
}
// type expenses={
//     id:string,
//     description:string,
//     createdAt:number,
//     note:string,
//     amount:number
// };
const now=moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component<ExpenseProps,MyState>{
    constructor(props:ExpenseProps){
        super(props)
        this.state={
            description: this.props.expense ? this.props.expense.description : '',
            note: this.props.expense ? this.props.expense.note : '',
            amount: this.props.expense ? (this.props.expense.amount/100).toString() : '',
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            calendarFocused:false, 
            error:'',
            id:this.props.expense?this.props.expense.id:''
        }
        // console.log(props);
        // console.log('ffff');
    }
    
     onDescriptionChange=(e:React.FormEvent<HTMLInputElement>):void=>{
        //  console.log("e.target", e.target);
        //  console.log("e.currentTarget.value", e.currentTarget.value);
         
      const description=e.currentTarget.value;
      this.setState(()=>({description}))
    };
    onNoteChange=(e:React.FormEvent<HTMLTextAreaElement>):void=>{
        const note=e.currentTarget.value;
        this.setState(()=>({note}))
    };
    onAmountChange=(e:React.FormEvent<HTMLInputElement>):void=>{
     const amount=e.currentTarget.value;
     if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
         this.setState(()=>({amount}));
     }
    };
    onDateChange=(createdAt:any)=>{
        if(createdAt){
            this.setState(()=>({createdAt}));
        }      
    };
    onFocusChange=()=>{
      this.setState({calendarFocused:!this.state.calendarFocused});
    };
    
    onSubmit=(e:React.SyntheticEvent)=>{ 
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide description and amount'}))
        }
        else{
            this.setState(()=>({error:''}))
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount)*100,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note,
                id:this.state.id
            })
        }             
    };
    render(){
        console.log(this.state.calendarFocused,'111111111111')
        return(              
              <form className="form" onSubmit={this.onSubmit}>
                   {this.state.error && <p className="form__error">{this.state.error}</p>}                 
                  <input
                  type="text"
                  placeholder="Description"
                  autoFocus
                  className="text-input"
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
                  />
                 
                  <input
                  type="text"
                  placeholder="Amount"
                  className="text-input"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  />
                 
                 <SingleDatePicker
                 id={this.state.id}
                 date={this.state.createdAt}
                 onDateChange={this.onDateChange}
                 focused={this.state.calendarFocused}
                 onFocusChange={this.onFocusChange}
                 numberOfMonths={1}
                 isOutsideRange={()=>false}
                 />
                 
                  <textarea
                  className="textarea"
                  placeholder="Add a note for your expense (optional)"
                  onChange={this.onNoteChange}
                  value={this.state.note}
                  >                      
                  </textarea>
                  <div>
                  <button className="button">Save Expense</button>
                  </div>
                  
              </form>           
        )
    }
}