export default signInRequest(email, password){
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password}
  };
}


export default signInSuccess(token, user){
  return {
    type: '@auth/SIGH_IN_SUCCESS',
    payload: { token, user}
  };
}

export default signFailure(){
  return {
    type: '@auth/SIGN_FAILURE',
    
  }
}