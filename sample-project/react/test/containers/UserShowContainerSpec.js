import UserShowContainer from '../../src/containers/UserShowContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('UserShowContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<UserShowContainer />);
  });

  it('should return true', () => {
    expect(true).toEqual(true);
  });
});
