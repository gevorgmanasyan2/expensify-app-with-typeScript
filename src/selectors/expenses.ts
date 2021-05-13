import moment from "moment";

type Filters = {
  text: string;
  sortBy: string;
  startDate: any;
  endDate: any;
};
export default (
  expenses: any,
  { text, sortBy, startDate, endDate }: Filters
) => {
  
  return expenses
    .filter((expense: any) => {     
      const createdAtMoment = expense.createdAt;
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());       
        
      return startDateMatch && endDateMatch && textMatch;     
    })
    .sort((a: any, b: any) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });   
    
};
