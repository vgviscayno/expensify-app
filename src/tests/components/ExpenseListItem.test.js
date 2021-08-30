import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(
        <ExpenseListItem key={expenses[2].id} {...expenses[2]} />
    );
    expect(wrapper).toMatchSnapshot();
});
