const authQuery = {
  login: {
    apiUrl: '/account/provider/login',
  },
  currentUser: {
    queryKey: ['currentUser'],
    apiUrl: '/account/consumer/me',
  },
  logout: {
    apiUrl: `/account/consumter/logout`,
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
};

export default authQuery;
