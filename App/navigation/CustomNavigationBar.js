import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {useSelector} from 'react-redux';

function CustomNavigationBar({navigation, back}) {
  const [visible, setVisible] = useState(false);

  const {userInfo} = useSelector(state => state.userInfoData);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="TODO List App" />

      {!back || userInfo?.idToken ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }>
          <Menu.Item onPress={() => {}} title="Log Out" />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}

export default CustomNavigationBar;
