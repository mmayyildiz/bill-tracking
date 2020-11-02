import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

const props = {
    msg: 'dummy'
 }

 const mountedComponent = shallow(<Message {...props}/>);

describe('Message', () => {

    it('should render with props', () => {
        expect(mountedComponent).toMatchSnapshot();
    });

    it('should render a message', () => {
        expect(mountedComponent.find('h3').html()).toContain('dummy');
    });

});
