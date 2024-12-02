import { CharacterModifiedDate } from './CharacterModifiedDate';
import { render } from '@testing-library/react'; // Optionnel pour les tests DOM

describe('CharacterModifiedDate', () => {
  const testDate = (input, expectedOutput) => {
    const result = CharacterModifiedDate({ modified: input });
    expect(result).toBe(expectedOutput);
  };

  test('returns "Date not available" when modified is undefined', () => {
    testDate(undefined, 'Date not available');
  });

  test('returns "Invalid date" when modified is an invalid date string', () => {
    testDate('invalid-date-string', 'Invalid date');
  });

  test('formats a valid ISO 8601 date string correctly', () => {
    testDate('2022-12-01T10:00:00Z', 'Dec 1, 2022');
  });

  test('handles edge case with a valid ISO 8601 string without time zone', () => {
    testDate('2023-12-01', 'Dec 1, 2023');
  });

  test('formats a valid date with time zone correctly', () => {
    testDate('2023-11-01T10:00:00+01:00', 'Nov 1, 2023');
  });
});
