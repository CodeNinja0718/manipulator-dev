const authQuery = {
  currentUser: {
    queryKey: ['currentUser'],
    apiUrl: '/account/customer/profile',
  },
  logout: {
    apiUrl: '/auth/logout',
    method: 'delete',
  },
  registerSendOtp: {
    apiUrl: '/account/customer/register/send-otp',
    method: 'post',
  },
  registerVerifyOtp: {
    apiUrl: '/account/customer/register/verify-otp',
    method: 'post',
  },
  customerRegister: {
    apiUrl: '/account/customer/register',
    method: 'post',
  },
  loginSendOtp: {
    apiUrl: '/auth/customer/login/send-otp',
    method: 'post',
  },
  loginVerifyOtp: {
    apiUrl: '/auth/customer/login',
    method: 'post',
  },
  updateProfile: {
    apiUrl: '/account/customer/profile',
    method: 'patch',
    successMessage: 'Your profile has been updated',
  },
};

export default authQuery;
