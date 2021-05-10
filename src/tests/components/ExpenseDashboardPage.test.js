import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new Adapter()});


test('should render ExpenseDashboardPage correctly',()=>{
    const wrapper=shallow(<ExpenseDashboardPage />);
    expect(toJson(wrapper)).toMatchSnapshot();  
        
});