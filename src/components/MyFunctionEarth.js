import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// Import Components
import HeaderBar from './Header-Bar';
import requiresLogin from './requires-login'

class MyFunctionEarth extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HeaderBar />
        <Text>My Function Earth</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

// export default connect(mapStateToProps)(MyFunctionEarth);
export default requiresLogin()(connect(mapStateToProps)(MyFunctionEarth));