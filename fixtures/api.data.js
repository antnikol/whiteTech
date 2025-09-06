export const userTestCases = [
  { userId: '12345', expectedStatus: 200, validateResponse: true, description: 'Successfully retrieve user data' },
  { userId: '9999999999999', expectedStatus: 404, description: 'Not found for invalid user ID' },
  { userId: 'nonexistent', expectedStatus: 400, description: 'Bad request for invalid user ID' },
  { userId: '!@#$%', expectedStatus: 400, description: 'Bad request for malformed user ID' },
  { userId: -1, expectedStatus: 400, description: 'Invalid numeric user ID' },
  { userId: '', expectedStatus: 422, description: 'Empty user ID' }
];

export const createUserTestCases = [
  { description: 'Create new user with valid data',
    payload: { username: 'testuser', age: 25, user_type: true }, 
    expectedStatus: 201, validateResponse: true },
  { description: 'Age below range',
    payload: { username: 'testuser', age: 0, user_type: true },
    expectedStatus: 400, errorMessage: 'Age must be between 1 and 100'
  },
  { description: 'Age above range',
    payload: { username: 'testuser', age: 101, user_type: true },
    expectedStatus: 400, errorMessage: 'Age must be between 1 and 100'
  },
  { description: 'Non-integer age',
    payload: { username: 'testuser', age: 25.5, user_type: true },
    expectedStatus: 400, errorMessage: 'Age must be an integer'
  },
  { description: 'Empty username',
    payload: { username: '', age: 25, user_type: true },
    expectedStatus: 400, errorMessage: 'Username cannot be empty'
  }
];
