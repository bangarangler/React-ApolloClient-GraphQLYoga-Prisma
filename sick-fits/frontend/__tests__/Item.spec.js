import ItemComponent from "../components/Item.js";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABC123",
  title: "A Cool Item",
  price: 5000,
  description: "This item is really cool!",
  image: "cool.jpg",
  largeImage: "extracool.png"
};

describe("<Item />", () => {
  it("renders and matches the snapshot", () => {
    //const price = "$50.35";
    //expect(price).toMatchSnapshot();
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  //it("renders the image properly", () => {
  //const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //const img = wrapper.find("img");
  ////console.log(img.props());
  //expect(img.props().src).toBe(fakeItem.image);
  //expect(img.props().alt).toBe(fakeItem.title);
  //});

  //it("renders the pricetag and title", () => {
  //const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //const PriceTag = wrapper.find("PriceTag");
  ////console.log(PriceTag.dive().text());
  ////console.log(PriceTag.children());
  //expect(PriceTag.children().text()).toBe("$50");
  ////console.log(wrapper.debug());
  //expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  //});

  //it("renders out the buttons properly", () => {
  //const wrapper = shallow(<ItemComponent item={fakeItem} />);
  ////console.log(wrapper.debug());
  //const buttonList = wrapper.find(".buttonList");
  //expect(buttonList.children()).toHaveLength(3);
  ////expect(buttonList.find("Link")).toHaveLength(1);
  //expect(buttonList.find("Link").exists()).toBe(true);
  //expect(buttonList.find("AddToCart").exists()).toBe(true);
  //expect(buttonList.find("DeleteItem").exists()).toBe(true);
  ////console.log(buttonList.debug());
  //});
});
