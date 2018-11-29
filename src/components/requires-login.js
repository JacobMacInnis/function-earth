import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

export default () => Component => {
  
  function RequiresLogin(props) {
    
      const { authenticating, loggedIn, error, ...passThroughProps } = props;
      if (authenticating) {
          return <View>Logging in...</View>;
      } else if (!loggedIn || error) {
          return () => this.props.navigation.navigate('Home');
      }

      return <Component {...passThroughProps} />;
  }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (state, props) => ({
        authenticating: state.auth.loading,
        loggedIn: state.auth.currentUser !== null,
        error: state.auth.error
    });

    return connect(mapStateToProps)(RequiresLogin);
};