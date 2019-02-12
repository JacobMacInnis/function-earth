import React from 'react';
import { Image, View } from 'react-native';
import { Asset, AppLoading } from 'expo';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <View style={{flex: 1 }}>
          <Image source={require('./assets/images/function-earth-splash.png')}
          style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}} 
          resizeMode="center"/>
          />
      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/images/function-earth-splash.png')
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}