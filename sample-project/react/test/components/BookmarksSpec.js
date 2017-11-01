import Bookmarks from '../../src/components/Bookmarks';

describe('Bookmarks', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<Bookmarks
      users={[
        { id: "1", user_name: "Chrissy Fancy", user_id: "4" },
        { id: "2", user_name: "Bob Jones", user_id: "5" }
      ]}
      />);
  });

  it('should render the Bookmarks component', () => {
    expect(wrapper.find(Bookmarks)).toBePresent();
  });

  it('should render the name of the bookmarked person', () => {
    expect(wrapper.find('a').nodes[0].innerHTML).toEqual('Chrissy Fancy');
  });
})
