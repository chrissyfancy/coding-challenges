import UserTile from '../../src/components/UserTile';

describe('UserTile', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<UserTile
      key={1}
      id={1}
      user={{
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

  it('should render the UserTile component', () => {
    expect(wrapper.find(UserTile)).toBePresent();
  });

  it('should return a link to the user show page', () => {
    expect(wrapper.find('a').text()).toEqual("Leanne Graham");
  });

  it('should return the username', () => {
    expect(wrapper.find('td').nodes[1].innerHTML).toEqual("Bret");
  });

  it('should return the email', () => {
    expect(wrapper.find('td').nodes[2].innerHTML).toEqual("Sincere@april.biz");
  });

  it('should return the address', () => {
    expect(wrapper.find('td').nodes[3].innerHTML).toEqual("<div>Kulas Light, Apt. 556</div><div>Gwenborough, 92998-3874</div>");
  });
})
