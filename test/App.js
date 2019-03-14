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
      dateOfBirth: null,
      phone: null
    }
  }


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
        this.state.firstName
      }
      keyboardType = 'default'
      returnKeyType = 'next'
      autoCorrect = {
        false
      }
      autoCapitalize = 'words'
      onChangeText = {(value) => this.setState({firstName: value})}
      onSubmitEditing = {(event) => {this.refs.lastName.focus() }
      }
      />
</View>
<View style={{flex:1}}>
      <TextInput mode = "outlined"
      ref = 'lastName'
      value = {
        this.state.lastName
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
      onChangeText = {(value) => this.setState({lastName: value})}
      onSubmitEditing = {(event) => {this.refs.dateofBirth.focus()}}
      /> 
      </View>
      <View style={{flex:1}}>
      
                  <TextInput 
                mode="outlined"
                    ref='dateofBirth'
                    render={props =>
                      <TextInputMask
                        {...props}
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
                    onSubmitEditing={(event) => { this.refs.phone.focus() }}
                  />
          </View>
          <View style={{flex:1}}>
                <TextInput mode="outlined"
                ref='phone'
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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
  },

  animatedHeader: {
    position: 'absolute',
    top: (Platform.OS == 'ios') ? 20 : 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    color: 'white',
    fontSize: 22
  },

  item: {
    backgroundColor: '#E0E0E0',
    margin: 8,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemText: {
    color: 'black',
    fontSize: 16
  }
});