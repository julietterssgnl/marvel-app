// chart-utils.test.js
import { prepareData, adaptDataForRadarChart } from './chart-utils';

describe('chart-utils.js', () => {
    describe('prepareData', () => {
        it('should transform the data correctly and remove undefined values', () => {
            const input = {
                force: 80,
                intelligence: 90,
                energy: 70,
                speed: undefined,
                durability: 85,
                fighting: 75
            };

            const expected = [
                { name: 'Force', value: 80 },
                { name: 'Intelligence', value: 90 },
                { name: 'Energy', value: 70 },
                { name: 'Durability', value: 85 },
                { name: 'Fighting', value: 75 }
            ];

            expect(prepareData(input)).toEqual(expected);
        });

        it('should return an empty array when no data is provided', () => {
            expect(prepareData()).toEqual([]);
        });

        it('should return an empty array when all values are undefined', () => {
            const input = {
                force: undefined,
                intelligence: undefined,
                energy: undefined,
                speed: undefined,
                durability: undefined,
                fighting: undefined
            };

            expect(prepareData(input)).toEqual([]);
        });
    });

    describe('adaptDataForRadarChart', () => {
        it('should adapt the data correctly for RadarChart', () => {
            const data = [
                { name: 'Force', value: 80 },
                { name: 'Intelligence', value: 90 },
                { name: 'Energy', value: 70 }
            ];

            const expectedA = [
                { subject: 'Force', A: 80 },
                { subject: 'Intelligence', A: 90 },
                { subject: 'Energy', A: 70 }
            ];

            const expectedB = [
                { subject: 'Force', B: 80 },
                { subject: 'Intelligence', B: 90 },
                { subject: 'Energy', B: 70 }
            ];

            expect(adaptDataForRadarChart(data, 'A')).toEqual(expectedA);
            expect(adaptDataForRadarChart(data, 'B')).toEqual(expectedB);
        });

        it('should return an empty array when no data is provided', () => {
            expect(adaptDataForRadarChart([], 'A')).toEqual([]);
        });
    });
});
