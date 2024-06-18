describe("Gilded Rose", function () {
  it("should pass", function () {
    expect(true).toEqual(true);
  });

  it("should increase quality of Aged brie the older it gets", function () {
    items = [new Item("Aged Brie", 2, 0)];
    update_quality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].quality).toEqual(1);
    expect(items[0].sell_in).toEqual(1);
  });
  it("should degrade quality twice as fast after sell by date has passed", function () {
    items = [new Item("Elixir of Mongoose", 0, 7)];
    update_quality();
    expect(items[0].name).toEqual("Elixir of Mongoose");
    expect(items[0].quality).toEqual(5);
  });
  it("should never be a negative quality", function () {
    items = [new Item("Elixir of Mongoose", 5, 0)];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
});
