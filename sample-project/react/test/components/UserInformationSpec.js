import UserInformation from '../../src/components/UserInformation';
import { shallow } from 'enzyme'

describe('UserInformation', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<UserInformation
      id={1}
      name={"Leanne Graham"}
      user={{
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          }
        }}
      />);
  });

  it('should render the UserInformation component', () => {
    expect(wrapper.find(UserInformation)).toBePresent();
  });

  it('should return the users name', () => {
    expect(wrapper.find('h1').text()).toEqual("Leanne Graham");
  });

  it('should return the users email', () => {
    expect(wrapper.find('div').nodes[1].innerHTML).toEqual('<!-- react-text: 4 -->Email: <!-- /react-text --><!-- react-text: 5 -->Sincere@april.biz<!-- /react-text -->');
  });

  it('should return the users username', () => {
    expect(wrapper.find('div').nodes[2].innerHTML).toEqual('<!-- react-text: 7 -->Username: <!-- /react-text --><!-- react-text: 8 -->Bret<!-- /react-text -->');
  });

  it('should return the users phone number', () => {
    expect(wrapper.find('div').nodes[3].innerHTML).toEqual('<!-- react-text: 10 -->Phone: <!-- /react-text -->');
  });
})
