const assertEqual = require('../assertEqual');
const tail = require('../tail')

describe('#tail', () => {

  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});