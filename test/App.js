/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  SafeAreaView
} from 'react-native';
import {
  TextInputMask
} from 'react-native-masked-text'
import {
  TextInput
} from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class App extends Component < Props > {

  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      firstNameValue: null,
      lastNameValue: null,
      dateOfBirth: null,
      phone: null
    }
  }

  lastName = React.createRef();
  dateOfBirth = React.createRef();
  phone = React.createRef();

  render() {
  
    return ( 
      <View style = {
        {
          flex: 1,
        }
      } >

      <SafeAreaView>
      <KeyboardAwareScrollView
  innerRef={ref => {
    this.scroll = ref
  }}>
  <View style={{flex:1}}>
      <TextInput mode = "outlined"
      ref = 'firstName'
      style = {
        {
          marginVertical: 20,
          marginRight: 40,
          marginLeft: 20,
        }
      }
      label = "First Name"
      theme = {
        {
          colors: {
            primary: 'purple',
            background: 'white'
          }
        }
      }
      value = {
        this.state.firstNameValue
      }
      keyboardType = 'default'
      returnKeyType = 'next'
      autoCorrect = {
        false
      }
      autoCapitalize = 'words'
      onChangeText = {(value) => this.setState({firstNameValue: value})}
      onSubmitEditing = {(event) => {this.lastName.current.focus() }
      }
      />
</View>
<View style={{flex:1}}>
      <TextInput mode = "outlined"
      ref = {this.lastName}
      value = {
        this.state.lastNameValue
      }
      style = {
        {
          marginVertical: 20,
          marginRight: 40,
          marginLeft: 20,
        }
      }
      label = "Last Name"
      theme = {
        {
          colors: {
            primary: 'purple',
            background: 'white'
          }
        }
      }

      keyboardType = 'default'
      returnKeyType = 'next'
      autoCapitalize = 'words'
      onChangeText = {(value) => this.setState({lastNameValue: value})}
      onSubmitEditing = {(event) => {this.dateOfBirth.current.getElement().focus()}}
      /> 
      </View>
      <View style={{flex:1}}>
      
                  <TextInput 
                mode="outlined"
                    render={props =>
                      <TextInputMask
                        {...props}
                        ref={this.dateOfBirth}
                        type={'custom'}
                        options={{
                          mask: "99/99/9999"
                        }}

                      />
                    }
                    value={this.state.dateOfBirthValue}
                    style={{marginVertical: 20,
                      marginRight: 40,
                      marginLeft: 20,}}
                    maxLength={10}
                    textInputStyle={{
                      flex: 1,
                      color: 'blue',
                      fontSize: 20
                    }}

                    label="Date of Birth"
                    theme={{
                      colors: {
                       primary: 'purple',
                    background: 'white'
                      }
                    }}
                    keyboardType='phone-pad'
                    returnKeyType='done'
                    onChangeText={(value) => this.setState({dateOfBirth: value})}
                    onSubmitEditing={(event) => { this.phone.current.focus() }}
                  />
          </View>
          <View style={{flex:1}}>
                <TextInput mode="outlined"
                ref={this.phone}
                label="Phone Number"
                theme={{
                  colors: {
                      primary: 'purple',
                    background: 'white'
                  }
                }}
                 value={this.state.phone}
                    style={{marginVertical: 20,
                        marginRight: 40,
                        marginLeft: 20,}}
                  onChangeText={(value) => this.setState({phone: value})}
                keyboardType='numeric'
                returnKeyType='done'
              />
              </View>
              </KeyboardAwareScrollView>
              </SafeAreaView>
      </View>
    )
  }
}

