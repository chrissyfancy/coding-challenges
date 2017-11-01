import BackButton from '../../src/components/BackButton';

describe('BackButton', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<BackButton/>);
  });

  it('should render the BackButton component', () => {
    expect(wrapper.find(BackButton)).toBePresent();
  });

  it('should render a link to go back to All Users', () => {
    expect(wrapper.find('button').nodes[0].innerHTML).toEqual('Back');
  });
})
