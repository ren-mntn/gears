import { utils } from './utils';

describe('utils', () => {
  test('convertDateToBigIntTimestamp', () => {
    const date = new Date('2021-01-01T00:00:00Z');
    const result = utils.convertDateToBigIntTimestamp(date);
    expect(result).toBe(BigInt(1609459200));
  });

  test('convertBigIntTimestampToNumber', () => {
    const numberTimestamp = utils.convertBigIntTimestampToNumber(
      BigInt(1609459200)
    );
    expect(numberTimestamp).toBe(1609459200000);
  });
});
