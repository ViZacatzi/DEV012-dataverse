//import { example, anotherExample } from '../src/dataFunctions.js';
//import { data as fakeData } from './data.js';
import { filterData} from '../src/dataFunctions.js';

//console.log(fakeData);

describe('filterData', () => {

  it('returns `example`', () => {
    const data = []
    const result = []
    expect(filterData(data)).toBe(result);
  });
});

//describe('anotherExample', () => {

//it('returns `anotherExample`', () => {
  //  expect(anotherExample()).toBe('OMG');
 // });
// });
