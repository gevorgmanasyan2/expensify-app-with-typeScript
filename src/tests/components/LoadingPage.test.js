import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import LoadingPage from '../../components/LoadingPage';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter:new Adapter()});


test('should correctly render LoadingPage',()=>{
    const wrapper=shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});