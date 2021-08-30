import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altData correctly', () => {
    wrapper.setProps({
        filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const text = 'some text';
    wrapper
        .find('input')
        .at(0)
        .simulate('change', {
            target: { value: text },
        });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters,
    });
    const text = 'date';
    wrapper
        .find('select')
        .at(0)
        .simulate('change', {
            target: { value: text },
        });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
    const text = 'amount';
    wrapper
        .find('select')
        .at(0)
        .simulate('change', {
            target: { value: text },
        });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate,
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
