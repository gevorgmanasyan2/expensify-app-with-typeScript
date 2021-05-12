import React from "react";
import { connect } from "react-redux";
import { DateRangePicker, FocusedInputShape } from 'react-dates';
import '../styles/styles.css';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { Moment } from "moment";


interface ExpenseListFiltersProps{  
  filters:{
      text:string,
      sortBy:string,
      startDate:any,
      endDate:any
  },
  dispatch:any,
  // onSubmit:any,  
};
type MyState={  
  calendarFocused:any,
  startDate:any,
  endDate:any 
}

class ExpenseListFilters extends React.Component<ExpenseListFiltersProps,MyState> {
  constructor(props:ExpenseListFiltersProps){
    super(props)
    this.state = {      
      startDate:props.filters?props.filters.startDate:null,
      endDate:props.filters?props.filters.endDate:null,
      calendarFocused: props.filters?[props.filters.startDate,props.filters.endDate]:null,       
    }
    console.log(props.filters.startDate,"SSSSSS",props.filters.endDate,"eeeeeeee");
    
  }
  
  
  
  onDatesChange = ({startDate, endDate}:any|null ) => {
    this.setState({startDate,endDate})
    // this.props.dispatch(setStartDate(arg.startDate));
    // this.props.dispatch(setEndDate(arg.endDate));
  }
  onFocusChange = (arg: FocusedInputShape | null) => {
    this.setState({calendarFocused:arg});
    // this.setState({calendarFocused:!this.state.calendarFocused});
  }
  // onDatesChange = (arg:{startDate:any,endDate:any}) => {
  //   this.props.dispatch(setStartDate(arg.startDate));
  //   this.props.dispatch(setEndDate(arg.endDate));
  // }
  // onFocusChange = (focused:any) => {
  //   this.setState(() => ({calendarFocused:focused}));
  // }
  render() {
    // console.log(this.props.filters);
    
    return (
      <div className="content-container">
        <div className="input-group">
        <div className="input-group__item">
        <input
        className="text-input"
        placeholder="Search expenses"
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
            // console.log(e.target.value);
          }}
        />
        </div>
        <div className="input-group__item">
        <select
        className="select"
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate())
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        </div>
        <div className="input-group__item">
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="dddd"
          endDate={this.state.endDate}
          endDateId="eeeee"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}         
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
        </div>
        </div>     
      </div>
    );
  }
};

const mapStateToProps = (state:any) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(ExpenseListFilters);
