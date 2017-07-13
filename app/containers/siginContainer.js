import React, {Component} from 'react';
import styles from './siginContainer.style';
import {
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import {Button} from 'react-native-elements';
import {Keyboard} from 'react-native';

import logo from '../resources/img/react-native.png'
import backImage from '../resources/img/backgroundImage.jpg'
import {Actions} from 'react-native-router-flux';

class SiginContainer extends Component {

  login = (userName) => {
    Actions.home;
  }

  dissmissKeyboard = () => {
    console.log("dismissing");
    Keyboard.dismiss();
  }

  gotoHome = () => {
    console.log("here now");
    Actions.home
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Image source={backImage} style={styles.container}>
          <View
            style={{
              flex: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            <Image source={logo} style={styles.image}/>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                returnKeyType={'next'}
                onSubmitEditing={(event) => {
                  this.refs.password.focus();
                }}
                ref="userName"
                placeholder="Enter User Name"
                placeholderTextColor="white"/>
              <TextInput
                ref='password'
                style={styles.input}
                secureTextEntry={true}
                placeholder="Enter Password"
                placeholderTextColor="white"/>

            </View>

          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row'
            }}>
            <Button
              raised
              onPress={this.gotoHome}
              buttonStyle={{
                padding: 0,
                flex: .5,
                width: Dimensions.get('window').width / 2,
                backgroundColor: '#488aff'
              }}
              textStyle={{
                textAlign: 'center'
              }}
              title={`LOGIN`}
              onPress={this.login.bind(this, this.refs.userName)}/>
            <Button
              raised
              buttonStyle={{
                padding: 0,
                width: Dimensions.get('window').width / 2,
                flex: .5,
                backgroundColor: 'black'
              }}
              textStyle={{
                textAlign: 'center'
              }}
              title={`REGISTER`}/>
          </View>

        </Image>

      </TouchableWithoutFeedback>

    );
  }
}

export default SiginContainer;