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
  it("should never exceed 50 in quality", function () {
    items = [new Item("Aged Brie", 2, 50)];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });
  it("should not have sell in days and quality changes when the item is sulfuras", function () {
    items = [new Item("Sulfuras, Hand of Ragnaros", 3, 80)];
    update_quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(3);
  });
  it("should increase backstage quality as sellin date approaches by 2 when 10 days or less", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20)];
    update_quality();
    expect(items[0].quality).toEqual(22);
  });
  it("should increase backstage quality as sellin date approaches by 3 when 5 days or less", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20)];
    update_quality();
    expect(items[0].quality).toEqual(23);
  });
  it("should drop quality to 0 after the concert", function () {
    items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });
  it("should decrease sellin and quality by one in case of a normal item", function () {
    items = [new Item("+5 Dexterity Vest", 10, 20)];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });
  it("should degrade in quality twice as fast as normal when conjured", function () {
    items = [new Item("Conjured Mana Cake", 3, 6)];
    update_quality();
    expect(items[0].sell_in).toEqual(2);
    expect(items[0].quality).toEqual(4);
  });
  it("should not have negative sellin days", function () {
    items = [new Item("+5 Dexterity Vest", 0, 5)];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
  });
});
