import moment from 'moment'; 
type Expenses={
 id:string,
        description:string,
        createdAt:number,
        note:string,
        amount:number,  
}       
type Filters={
  text:string,
  sortBy:string,
  startDate:any,
  endDate:any
}
export default (expenses:any, { text, sortBy, startDate, endDate }:Filters) => {
  return expenses
    .filter((expense:any) => {

    //   const startDateMatch =
    //     typeof startDate !== "number" || expense.createdAt >= startDate;
    //   const endDateMatch =
    //     typeof endDate !== "number" || expense.createdAt <= endDate;
    const createdAtMoment=expense.createdAt;
    const startDateMatch=startDate? startDate.isSameOrBefore(createdAtMoment,'day') : true;
    const endDateMatch=endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a:any, b:any) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
