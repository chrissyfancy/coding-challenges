import UserContainer from '../../src/containers/UserContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('UserContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<UserContainer />);
  });

  it('should return true', () => {
    expect(true).toEqual(true);
  });
});
