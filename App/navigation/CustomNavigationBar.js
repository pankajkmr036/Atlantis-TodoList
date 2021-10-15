import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import {userLogout} from '../redux/actions/userActions';
function CustomNavigationBar({navigation, back}) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const {userInfo} = useSelector(state => state.userInfoData);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="TODO List App" />

      {userInfo && userInfo.idToken ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }>
          <Menu.Item
            onPress={() => {
              dispatch(userLogout());
            }}
            title="Log Out"
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;
