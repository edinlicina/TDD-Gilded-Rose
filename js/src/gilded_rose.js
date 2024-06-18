function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    update_aged_brie(items[i]);
    update_backstage(items[i]);
    update_conjured(items[i]);
    update_default_case(items[i]);
    update_sulfuras(items[i]);
    set_quality_0_if_negative(items[i]);
    set_quality_50_if_above(items[i]);
    update_sellin(items[i]);
  }
}
function update_sulfuras(item) {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    item.sell_in = item.sell_in;
    item.quality = item.quality;
  }
}
function update_default_case(item) {
  if (
    item.name != "Sulfuras, Hand of Ragnaros" &&
    item.name != "Aged Brie" &&
    item.name != "Conjured Mana Cake" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.sell_in === 0) {
      item.quality -= 2;
    } else {
      item.quality -= 1;
    }
  }
}
function update_conjured(item) {
  if (item.name === "Conjured Mana Cake") {
    if (item.sell_in === 0) {
      item.quality -= 4;
    } else {
      item.quality -= 2;
    }
  }
}
function update_aged_brie(item) {
  if (item.name === "Aged Brie") {
    item.quality += 1;
  }
}
function update_backstage(item) {
  if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    if (item.sell_in <= 0) {
      item.quality = 0;
    } else if (item.sell_in <= 5) {
      item.quality += 3;
    } else if (item.sell_in <= 10) {
      item.quality += 2;
    }
  }
}
function set_quality_0_if_negative(item) {
  if (item.quality < 0) {
    item.quality = 0;
  }
}
function set_quality_50_if_above(item) {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }
  if (item.quality > 50) {
    item.quality = 50;
  }
}
function update_sellin(item) {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return;
  }
  item.sell_in -= 1;
  if (item.sell_in < 0) {
    item.sell_in = 0;
  }
}
