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
    metod: 'post',
  },
  loginVerifyOtp: {
    apiUrl: '/auth/customer/login',
    metod: 'post',
  },
};

export default authQuery;
