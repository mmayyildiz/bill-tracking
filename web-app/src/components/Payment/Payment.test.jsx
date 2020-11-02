import React from 'react';
import { shallow } from 'enzyme';
import Payment from './Payment';

const props = {
    id: 'foo id',
    name: 'foo name',
    frequency: 'weekly',
    amount: '100'
 }

const mountedComponent = shallow(<Payment {...props}/>);

describe('Payment', () => {

    it('should render with props', () => {
       
        expect(mountedComponent).toMatchSnapshot();
    });

    it('should render a name', () => {
        expect(mountedComponent.find('.name').html()).toContain('foo name');
    });

});


