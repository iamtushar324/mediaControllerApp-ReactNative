import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {
  sendKeyPress,
  sendKeyPressWithCommand,
  sendKeyPressWithFN,
} from '../utils/index';

export default function MediaControls() {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.desktopCon}>
        <Button
          title="Volume Up"
          color="#841584"
          style={styles.button}
          onPress={() => {
            sendKeyPress('audio_vol_up');
          }}
        />
        <Button
          title="Volume Down"
          color="#841584"
          style={styles.button}
          onPress={() => {
            sendKeyPress('audio_vol_down');
          }}
        />
      </View>
      <View style={styles.desktopCon}>
        <Button
          title="Prev"
          color="#841584"
          style={styles.button}
          onPress={() => {
            sendKeyPress('audio_prev');
          }}
        />
        <Button
          title="Next"
          color="#841584"
          style={styles.button}
          onPress={() => {
            sendKeyPress('audio_next');
          }}
        />
      </View>
      <View style={styles.desktopCon}>
        <Button
          title="Play"
          color="#841584"
          style={{...styles.button}}
          onPress={() => {
            sendKeyPress('audio_play');
          }}
        />
        <Button
          title="Pause"
          color="#841584"
          style={{...styles.button}}
          onPress={() => {
            sendKeyPress('audio_pause');
          }}
        />
      </View>
      <View style={styles.desktopCon}>
        <Button
          title="Arrow Up"
          color="#841584"
          style={{...styles.button}}
          onPress={() => {
            sendKeyPress('up');
          }}
        />
      </View>
      <View style={styles.desktopCon}>
        <Button
          title="Arrow Left"
          color="#841584"
          style={{...styles.button}}
          onPress={() => {
            sendKeyPress('left');
          }}
        />
        <Button
          title="Arrow Right"
          color="#841584"
          style={{...styles.button}}
          onPress={() => {
            sendKeyPress('right');
          }}
        />
      </View>
      <View style={styles.desktopCon}>
        <Button
          title="Arrow Up"
          color="#841584"
          style={{...styles.button}}
          onPress={() => {
            sendKeyPress('down');
          }}
        />
      </View>
      <View style={styles.desktopCon}>
        <Button
          title="<-"
          color="#841584"
          style={styles.button}
          onPress={() => {
            sendKeyPressWithCommand('j');
          }}
        />
        <Button
          title="->"
          color="#841584"
          style={styles.button}
          onPress={() => {
            sendKeyPressWithCommand('k');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  desktopCon: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  button: {
    width: 150,
  },
  mainWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: '95%',
  },
});
