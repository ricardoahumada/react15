import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Component from './Component.jsx';
import React from 'react';
import { mount } from 'enzyme';

test('Component renders the text inside it', () => {
  const usuario = {uid:1,name:"Ricardo",email:"r@e.cat"};
  const wrapper = mount(
    <Component user={usuario} />
  );
  const p = wrapper.find('.titulo h1');
  expect(p.text()).toBe('Ricardo');
});