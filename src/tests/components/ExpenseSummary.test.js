import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expense-total';

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(
        <ExpenseSummary
            expenseCount={[expenses[0]].length}
            expensesTotal={selectExpensesTotal([expenses[0]])}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(
        <ExpenseSummary
            expenseCount={expenses.length}
            expensesTotal={selectExpensesTotal(expenses)}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
