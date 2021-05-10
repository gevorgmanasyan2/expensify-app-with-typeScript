import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new Adapter()});

// for testing components must install react-test-renderer

// test('should render Header correctly',()=>{
//     const renderer=new ReactShallowRenderer();
//     renderer.render(<Header />);
    // console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();    
// });
test('should render Header correctly',()=>{
    const wrapper=shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe("ExpensifY");
        
});