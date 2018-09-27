import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter : new Adapter()});

describe('<NavigationItems />',()=>{
let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
});

    it('should render two <NavigationItems /> if not authenticated', ()=>{
         expect(wrapper.find( NavigationItem)).toHaveLength(2);
        });
       
    it('should render three <NavigationItems /> if authenticated', ()=>{
        // wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated : true});
        expect(wrapper.find( NavigationItem)).toHaveLength(3);
           });    
    it('should render an exact logout button ', ()=>{
        wrapper.setProps({isAuthenticated : true});    
        expect(wrapper.contains( <NavigationItem link ="/logout">Logout</NavigationItem>)).toEqual(true);
               }); 
    });