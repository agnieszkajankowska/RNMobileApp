import React from 'react';
import { Platform, StatusBar, StyleSheet, View, TextInput, Button, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import globalState from './globalState';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
      isUserLogged: false,
      userCode: '',
  };


  render() {
      const submitLogin = () => {
          fetch('https://inkassoforummobileapi.azurewebsites.net//api/User/LogUser', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      code: this.state.userCode
                  })
              }
          ).then((response) => response.json().then((data) => {
                  console.log('data', data);
                  this.setState({...this.state, isUserLogged: true});
                  globalState.userCode = this.state.userCode;
                  if (data.data.isAuthorized) {
                      globalState.isAuthorized = this.state.isAuthorized;
                  }
                  console.log("code", this.state.userCode);
              }
          ))
      }
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
        if(!this.state.isUserLogged) {
            return (
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ marginLeft: 10, height: 100, width: 300 }} source={require('./assets/images/inkassoforum.jpg')} />
                    <TextInput placeholder="Enter Your Code" style={{height: 60, width: 300}} value={this.state.userCode}
                               onChangeText={(text) => this.setState({...this.state, userCode: text})}/>
                    <Button title="Login" onPress={submitLogin} color="#00816d" />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <AppNavigator/>
                </View>
            );
        }
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
