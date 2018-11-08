const expression = require('./index');

test ('1', ()=> {
    expect(expression(2,2,3)).toBe(7);
});
