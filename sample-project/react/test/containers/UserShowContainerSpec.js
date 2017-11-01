import UserShowContainer from '../../src/containers/UserShowContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('UserShowContainer', () => {
  let wrapper;

  const data = {
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    company: {
      bs: "transition cutting-edge web services",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      name: "Robel-Corkery"
    },
    email: "Julianne.OConner@kory.org",
    id: 4,
    name: "Patricia Lebsack",
    phone: "493-170-9623 x156",
    username: "Karianne",
    website: "kale.biz"
  }

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<UserShowContainer
      props={data}
      params={{"id":"4"}}
     />);
  });

  it('should render the UserShowContainer component', () => {
    expect(wrapper.find(UserShowContainer)).toBePresent();
  });

  it('should have access to the params', () => {
    expect(wrapper.props().params).toEqual({id: '4'});
  });

  it('should have access to the user information', () => {
    console.log(wrapper.props().props);
    expect(wrapper.props().props).toEqual({
      address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990"
          }
        },
        company: {
          bs: "transition cutting-edge web services",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          name: "Robel-Corkery"
        },
        email: "Julianne.OConner@kory.org",
        id: 4,
        name: "Patricia Lebsack",
        phone: "493-170-9623 x156",
        username: "Karianne",
        website: "kale.biz"
    });
  });
});
