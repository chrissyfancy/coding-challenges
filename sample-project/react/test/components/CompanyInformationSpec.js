import CompanyInformation from '../../src/components/CompanyInformation';

describe('CompanyInformation', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<CompanyInformation
      company= {{
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
        }
      }
      />);
  });

  it('should render the CompanyInformation component', () => {
    expect(wrapper.find(CompanyInformation)).toBePresent();
  });

  it('should render the title Company Information', () => {
    expect(wrapper.find('h4').nodes[0].innerHTML).toEqual('Company Information');
  });

  it('should render the name of the company', () => {
    expect(wrapper.find('div').nodes[1].innerHTML).toEqual('<!-- react-text: 4 -->Name: <!-- /react-text --><!-- react-text: 5 -->Romaguera-Crona<!-- /react-text -->');
  });

  it('should render the slogan of the company', () => {
    expect(wrapper.find('div').nodes[2].innerHTML).toEqual('<!-- react-text: 7 -->Slogan: <!-- /react-text --><!-- react-text: 8 -->Multi-layered client-server neural-net<!-- /react-text -->');
  });

  it('should render the BS of the company', () => {
    expect(wrapper.find('div').nodes[3].innerHTML).toEqual('<!-- react-text: 10 -->BS: <!-- /react-text --><!-- react-text: 11 -->harness real-time e-markets<!-- /react-text -->');
  });
})
