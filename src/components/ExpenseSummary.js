import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = `expense${expenseCount > 1 ? 's' : ''}`;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format(
        '$0,0.00'
    );
    return (
        <div>
            <h1>
                Viewing {expenseCount} {expenseWord} totalling{' '}
                {formattedExpensesTotal}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
