import orderByProps from '../orderByProps';

test('orderByProps func test', () => {
    const testObj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const testSortKeysArr = ["name", "level"];
    const expected = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40}, 
        {key: "health", value: 10} 
    ];
    expect(orderByProps(testObj, testSortKeysArr)).toEqual(expected);
    expect(orderByProps(testObj)).toEqual([
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}, 
        {key: "level", value: 2},
        {key: "name", value: "мечник"}
    ]);
    expect(orderByProps({})).toEqual([]);
});