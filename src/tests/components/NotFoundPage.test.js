import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import NotFoundPage from '../../components/NotFoundPage';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new Adapter()});


test('should render NotFoundPage correctly',()=>{
    const wrapper=shallow(<NotFoundPage />);
    expect(toJson(wrapper)).toMatchSnapshot();  
        
});