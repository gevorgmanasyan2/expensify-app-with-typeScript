import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
import toJson from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


Enzyme.configure({adapter:new Adapter()});

test('should render ExpenseListItem correctly',()=>{
const wrapper =shallow(<ExpenseListItem {...expenses[0]}/>);
expect(toJson(wrapper)).toMatchSnapshot();
});