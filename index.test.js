const expression = require('./index');

test ('1', ()=> {
    expect(expression(2,2,3)).toBe(7);
});

test ('2', ()=> {
    expect(expression(1,5,2)).toBe(10);
});

test ('3', ()=> {
    expect(expression(3,3,0)).toBe(27);
});
