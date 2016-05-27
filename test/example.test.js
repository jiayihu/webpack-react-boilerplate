import { expect } from 'chai';
import { shallow } from 'enzyme';

import React from 'react';
import App from '../src/App/App';

describe('App', () => {
  it('should should render a paragraph', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p')).to.have.length(1);
  });
});
