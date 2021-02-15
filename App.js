/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import NotifService from './services/NotifService';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.notif = new NotifService(
      this.onRegister.bind(this),
      this.onNotif.bind(this),
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Example app react-native-push-notification
        </Text>
        <View style={styles.spacer}></View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.localNotif();
          }}>
          <Text>Local Notification (default sound) (now)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.localNotif('whatsapp_incoming.mp3');
          }}>
          <Text>Local Notification with sound (.mp3) (now)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.localNotif2('help_sound.wav');
          }}>
          <Text>Local Notification with sound (help_sound.wav) (now)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.scheduleNotif();
          }}>
          <Text>Schedule Notification (default) in 15s</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.notif.scheduleNotif('cosmic_radio.ogg');
          }}>
          <Text>Schedule Notification with sound (.ogg) in 15s</Text>
        </TouchableOpacity>


        <View style={styles.spacer}></View>

        {this.state.fcmRegistered && <Text>FCM Configured !</Text>}

        <View style={styles.spacer}></View>
      </View>
    );
  }

  onRegister(token) {
    console.log( 'TOKEN:', token );
    this.setState({registerToken: token.token, fcmRegistered: true});
  }

  onNotif(notif) {
    Alert.alert(notif.title, notif.message);
  }

  handlePerm(perms) {
    Alert.alert('Permissions', JSON.stringify(perms));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
    padding: 5,
    width: '70%',
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    margin: 5,
    padding: 5,
    width: '70%',
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});