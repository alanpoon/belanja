var bottle =require('./static/bottle.png');
var cup =require('./static/cup.png');
var mug =require('./static/mug.png');
var honey =require('./static/honey.png');
var hoodie =require('./static/hoodie.png');
var phone =require('./static/phone.png');

const items = [
  {
    text: '100: Bottle Water',
    value: 100,
    name: 'Bottle Water',
    image: bottle
  },
  {
    text: '101: Coffee',
    value: 101,
    name: 'Coffee',
    image: cup
  },
  {
    text: '200: Mug',
    value: 200,
    name: 'Mug',
    image: mug
  },
  {
    text: '201: Honey',
    value: 201,
    name: 'Honey',
    image: honey
  },
  {
    text: '300: Hoodie',
    value: 300,
    name: 'Hoodie',
    image: hoodie
  },
  {
    text: '301: Phone',
    value: 301,
    name: 'Phone',
    image: phone
  }
];

export const itemsById = items.reduce((acc, item) => {
  acc[item.value] = item;
  return acc;
}, {} as { [key: string]: typeof items[0] });

export default items;
