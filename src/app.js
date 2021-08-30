import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const store = configureStore();

store.dispatch(
    addExpense({
        description: 'Water bill',
        amount: 24000,
        createdAt: moment(),
    })
);
store.dispatch(
    addExpense({ description: 'Gas bill', amount: 1000, createdAt: moment() })
);
store.dispatch(
    addExpense({ description: 'Rent', amount: 24000, createdAt: moment() })
);

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(state, visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
