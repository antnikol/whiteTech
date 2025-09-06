export const signData = {
  accountType: 'Personal account',
  
  images: {
    logo: '/assets/images/auth/auth-logo-paydo-white.svg',
    slider: [
      '/assets/images/auth/slider/slide-1.png',
      '/assets/images/auth/slider/slide-4.png',
      '/assets/images/auth/slider/slide-3.png'
    ]
  },

  sliderTitles: [
    'Individual IBANs',
    'Issuing physical and virtual cards',
    'Pay with PayDo checkout'
  ],

  passwordPlaceholder: 'Enter password',
  emailPlaceholder: 'Enter email',
  termsLink: "/external/landing/terms-of-use-canada",
  
  titles: {
    page: 'Create a personal account'
  },

  labels: {
    email: 'Email',
    password: /^Password$/,
    confirmPassword: 'Confirm password'
  },

  buttons: {
    createAccount: 'Create an account',
    backToHome: 'Back to Homepage',
    login: 'Log In',
    switchToBusiness: 'Switch to create Business account'
  },

  passwordRequirements: [
    'Min.8 characters',
    'Lowercase letter',
    'Uppercase letter',
    'At least 1 number'
  ],

  footer: {
    text: 'By creating an account you confirm that you read and accept our',
    termsLink: 'Terms of Use © Paydo Canada LTD'
  },

  signUpUrl: 'https://account.paydo.com/en/auth/personal/sign-up',

  signInUrl: 'https://account.paydo.com/en/auth/personal/sign-in',

  emailTestCases: [
    { value: 'invalid-email', expectedError: 'Please enter correct email' },
    { value: '', expectedError: 'Please fill in this field to continue' },
  ],

  passwordTestCases: [
    // { value: '~_#', expectedError: 'Please enter correct password' },
    { value: '', expectedError: 'Please fill in this field to continue' }
  ],
};
