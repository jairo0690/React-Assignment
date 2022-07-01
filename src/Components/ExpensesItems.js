import ExpenseItem from "./ExpenseItem";

function ExpensesItems(props){
    return(
        <div>
            <ExpenseItem
                title={props.expensesArr[0].title}
                amount={props.expensesArr[0].amount}
                date={props.expensesArr[0].date}/>
                <ExpenseItem
                title={props.expensesArr[1].title}
                amount={props.expensesArr[1].amount}
                date={props.expensesArr[1].date}/>
                <ExpenseItem
                title={props.expensesArr[2].title}
                amount={props.expensesArr[2].amount}
                date={props.expensesArr[2].date}/>
                <ExpenseItem
                title={props.expensesArr[3].title}
                amount={props.expensesArr[3].amount}
                date={props.expensesArr[3].date}/>
        </div>    
    );
}

export default ExpensesItems;