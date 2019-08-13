function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    // Simulate an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe("mocking learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    console.log(fetchDogs);
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
    fetchDogs("hugo");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it("can create a person", () => {
    const me = new Person("Jon", ["burgers", "hibachi"]);
    expect(me.name).toBe("Jon");
  });

  it("can fetch foods", async () => {
    const me = new Person("Jon", ["burgers", "hibachi"]);
    // mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(["sushi", "pizza"]);
    const favFoods = await me.fetchFavFoods();
    console.log("favFoods: ", favFoods);
    expect(favFoods).toContain("pizza");
  });
});
