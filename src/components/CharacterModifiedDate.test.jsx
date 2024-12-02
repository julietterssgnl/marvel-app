import { CharacterModifiedDate } from './CharacterModifiedDate';
import { render } from '@testing-library/react'; // Optionnel pour les tests DOM

describe('CharacterModifiedDate', () => {
  test('returns "Date not available" when modified is undefined', () => {
    const result = CharacterModifiedDate({ modified: undefined });
    expect(result).toBe('Date not available');
  });

  test('returns "Invalid date" when modified is an invalid date string', () => {
    const result = CharacterModifiedDate({ modified: 'invalid-date-string' });
    expect(result).toBe('Invalid date');
  });

  test('formats a valid ISO 8601 date string correctly', () => {
    const result = CharacterModifiedDate({ modified: '2023-12-01T10:00:00Z' });
    expect(result).toBe('Dec 1, 2023');
  });

  test('handles edge case with a valid ISO 8601 string without time zone', () => {
    const result = CharacterModifiedDate({ modified: '2023-12-01' });
    expect(result).toBe('Dec 1, 2023');
  });

  test('formats a valid date with time zone correctly', () => {
    const result = CharacterModifiedDate({ modified: '2023-12-01T10:00:00+01:00' });
    expect(result).toBe('Dec 1, 2023');
  });
});
