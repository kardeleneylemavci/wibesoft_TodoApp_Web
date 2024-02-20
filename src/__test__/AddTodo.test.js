import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../AddTodo';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('AddTodo component', () => {
  it('renders input and button', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('calls addTodo prop function with input value when form is submitted', () => {
    const addTodoMock = jest.fn();
    const wrapper = shallow(<AddTodo addTodo={addTodoMock} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Test todo' } });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(addTodoMock).toHaveBeenCalledWith('Test todo');
  });
});
