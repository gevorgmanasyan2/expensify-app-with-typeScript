import React from 'react';
import{shallow} from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import toJson from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new Adapter()});


test('should render ExpenseList with expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});
test('should render ExpenseList with empty message',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});