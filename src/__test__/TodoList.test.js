import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('TodoList component', () => {
  it('renders todos correctly', () => {
    const todos = [
      { text: 'Todo 1', completed: false },
      { text: 'Todo 2', completed: false },
    ];
    const wrapper = shallow(<TodoList todos={todos} />);
    expect(wrapper.find('.todo-item').length).toEqual(2);
  });

  
});
