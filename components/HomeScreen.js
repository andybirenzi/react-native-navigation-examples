import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';
import { Component } from 'react';
import styles from '../styles/Styles'
class HomeScreen extends Component {
  state = {
    loading: false
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <WebView source={{ uri: "https://tiktak.bi/" }}
          onLoadStart={() => this.setState({ spinner: true })}
          onLoadEnd={() => this.setState({ spinner: false })}
        />
      </View>
    );
  }
}

export default HomeScreen;