import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Page1ScreenDetail extends Component {
  render() {
    return (
      <View>
        <Text>Page1Detail</Text>
        <Button
          title="go to Page1"
          onPress={() => {
            this.props.navigation.navigate('Page1');
          }}
        />
      </View>
    );
  }
}
