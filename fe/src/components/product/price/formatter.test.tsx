import formatAmount from './formatter';

describe('formatAmount', () => {
  it('formats integer values correctly', () => {
    const result = formatAmount(123456);
    expect(result.amount).toBe('123.456');
    expect(result.decimal).toBe('');
  });

  it('formats float values correctly', () => {
    const result = formatAmount(123456.78);
    expect(result.amount).toBe('123.456');
    expect(result.decimal).toBe('78');
  });

  it('formats string values correctly', () => {
    const result = formatAmount('123456.78');
    expect(result.amount).toBe('123.456');
    expect(result.decimal).toBe('78');
  });

  it('formats values with no decimal part correctly', () => {
    const result = formatAmount('123456');
    expect(result.amount).toBe('123.456');
    expect(result.decimal).toBe('');
  });
});