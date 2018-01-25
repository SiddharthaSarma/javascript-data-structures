const MyArray = require('./index');

describe('Array data-structure testcases', () => {
  test('it should have empty elements', () => {
    let objArr = new MyArray();
    expect(objArr.length()).toEqual(0);
  });

  test('it should add the elements', () => {
    let arr = new MyArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    let result = [];
    arr.print(el => result.push(...el));
    expect(result.length).toEqual(4);
  });
});
