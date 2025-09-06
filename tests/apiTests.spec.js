const { test, expect } = require('@playwright/test');
const { userTestCases, createUserTestCases } = require('../fixtures/api.data');

test.describe('User API Tests', () => {
  const baseUrl = 'http://api.dev.domain.com';

  for (const testCase of userTestCases) {
    test(`GET /users/{user_id} - ${testCase.description}`, async ({ request }) => {
      // Send GET request
      const response = await request.get(`${baseUrl}/users/${testCase.userId}`);
      
      // Assert status code
      expect(response.status()).toBe(testCase.expectedStatus);
      
      // For successful requests, validate the response structure
      if (testCase.validateResponse) {
        const responseBody = await response.json();

        // Validate response structure
        expect(responseBody).toHaveProperty('username');
        expect(responseBody).toHaveProperty('age');
        expect(responseBody).toHaveProperty('user_id');

        // Validate data types
        expect(typeof responseBody.username).toBe('string')
        expect(typeof responseBody.age).toBe('number')
        expect(Number.isFinite(responseBody.age)).toBe(true)
        expect(Number.isInteger(responseBody.age)).toBe(true)
        expect(['string', 'number']).toContain(typeof responseBody.user_id);

        // Validate age constraints
        expect(responseBody.age).toBeGreaterThanOrEqual(1)
        expect(responseBody.age).toBeLessThanOrEqual(100)
      }
    });
  }

  test('POST /users - User creation test suite', async ({ request }) => {
    for (const testCase of createUserTestCases) {
      await test.step(testCase.description, async () => {
        const response = await request.post(`${baseUrl}/users`, {
          data: testCase.payload
        });

        // Assert status code
        expect(response.status()).toBe(testCase.expectedStatus)

        if (testCase.validateResponse) {
          // Validate response
          const responseBody = await response.json();

          // Validate response structure
          expect(responseBody).toHaveProperty('user_id')
          expect(responseBody).toHaveProperty('username')

          // Validate data types
          expect(typeof responseBody.username).toBe('string')
          expect(['string', 'number']).toContain(typeof responseBody.user_id)

          // Validate response data matches request
          expect(responseBody.username).toBe(testCase.payload.username)
        }

        if (testCase.errorMessage) {
          const errorBody = await response.json()
          expect(errorBody).toHaveProperty('message', testCase.errorMessage)
        }
      });
    }
  });
});
