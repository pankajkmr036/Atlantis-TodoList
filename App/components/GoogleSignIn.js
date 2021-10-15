import React from 'react';
import {View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import {useDispatch, useSelector} from 'react-redux';
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
} from '../redux/actions/userActions';

GoogleSignin.configure({
  webClientId:
    '980681411560-aqemq1aq0rlmbahgunihu4jmuq99ludp.apps.googleusercontent.com',
  scopes: [],
  iosClientId:
    '980681411560-u6jkvi2uacdo20j8k6i5pfu913038ev9.apps.googleusercontent.com',
});

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  const {isLoginInProgress} = useSelector(state => state.userInfoData);

  const signIn = async () => {
    dispatch(userLoginRequest());
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(userLoginSuccess(userInfo));
    } catch (error) {
      dispatch(userLoginFail());
      console.log(error);
    }
  };

  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={isLoginInProgress}
      />
    </View>
  );
};

export default GoogleSignIn;
