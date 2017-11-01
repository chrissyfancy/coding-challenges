import NavBar from '../../src/components/NavBar';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<NavBar/>);
  });

  it('should render the NavBar component', () => {
    expect(wrapper.find(NavBar)).toBePresent();
  });

  it('should render a link to go back to All Users', () => {
    expect(wrapper.find('a').nodes[0].innerHTML).toEqual('All Users');
  });

  it('should render a back button', () => {
    expect(wrapper.find('button').nodes[0].innerHTML).toEqual('Back');
  });
})
