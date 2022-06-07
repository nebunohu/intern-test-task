import { NO_NUMBERS, ONLY_ONE_NUMBER } from './../consts/index';
import getMinSum from "../utils/get-min-sum";

describe('Function', () => {
  it(`should return -2 for ['-3', '-1', '-1']`, () => {
    expect(getMinSum(`-3, -1, -1`)).toEqual(-4);
  });
  it(`should return ${NO_NUMBERS} for []`, () => {
    expect(getMinSum(``)).toEqual(NO_NUMBERS);
  });
  it(`should return ${NO_NUMBERS} for ['a', 'b']`, () => {
    expect(getMinSum(`a, b`)).toEqual(NO_NUMBERS);
  });
  it(`should return ${ONLY_ONE_NUMBER} for ['1', 'b']`, () => {
    expect(getMinSum(`1, b`)).toEqual(ONLY_ONE_NUMBER);
  });
  it(`should return 3 for ['1', '2', 'b']`, () => {
    expect(getMinSum(`1, 2, b`)).toEqual(3);
  });
});