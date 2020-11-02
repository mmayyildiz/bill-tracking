import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const props = {
    title: 'foo title',
    subTitle: 'foo sub',
    description: 'foo desc'
 }

 const mountedComponent = shallow(<Header {...props}/>);

describe('Header', () => {

    it('should render with props', () => {
       
        expect(mountedComponent).toMatchSnapshot();
    });

    it('should render paragraphs', () => {
        expect(mountedComponent.find('p').length).toBe(3);
    });

});
