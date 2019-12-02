
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { EditextLogin } from "../../components"

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Login extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  };

  // _renderTextEdit = (tittle, usebt, show) => {
  //   if (usebt == true) {
  //     return (
  //       <View style={styles.viewRowTextInput}>
  //         <Text style={styles.tittle}>{tittle}</Text>
  //         <TextInput style={styles.inputText} secureTextEntry={show}></TextInput>
  //         <TouchableOpacity style={{ marginRight: 6 }}>
  //           <Text>{show ? "show" : "hide"}</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }
  //   else {
  //     return (
  //       <View style={styles.viewRowTextInput}>
  //         <Text style={styles.tittle}>{tittle}</Text>
  //         <TextInput style={styles.inputText}></TextInput>
  //       </View>
  //     );
  //   }

  // };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <ScrollView>
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logo}>

            </View>
            {/* Slogan */}
            <Text style={styles.txt_slogan}>
              Slogan of application
            </Text>
            {/* main_contianer */}
            <View style={styles.main_container}>
              {/* <EditextLogin/>
              <EditextLogin/> */}
            </View>
            {/* Button */}
            <TouchableOpacity
              style={styles.button_login}
              onPress={() => {
                this.props.navigation.navigate('List')
              }}
            >
              <Text style={styles.txt_login}>
                login
              </Text>
            </TouchableOpacity>








            {/* <Text style={{ fontSize: 30 }}>Login</Text>
            <View style={{ width: '100%', height: "50%", alignItems: "center" }}>
              {this._renderTextEdit("Username:")}
              {this._renderTextEdit("Password:", true, this.state.show)}
              <TouchableOpacity style={styles.button}
                onPress={() => {
                  this.props.navigation.navigate('List')
                }}
              >
                <Text style={{ color: "#A3FFCD" }}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{}}
                 onPress={() => {
                  this.props.navigation.navigate('formXinPhep')
                }}
              >
                <Text>Forgot password!</Text>
              </TouchableOpacity>
            </View> */}
          </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({

  // style new

  container: {
    flex: 1,
    backgroundColor: "#cad4d5",
    alignItems: "center",
  },
  logo: {
    height: 160,
    marginTop: 20,
    width: 160,
    backgroundColor: "white",
    borderRadius: 80,
    borderWidth: 0.8,
    borderColor: "black"
  },
  txt_slogan:
  {
    color: "#218d91",
    fontSize: 30,
    marginTop: 15,
  },
  main_container:
  {
    width: "90%",
    height: 350,
    borderRadius: 15,
    backgroundColor: "#218d91",
    marginTop: 30,
    alignItems:"center"
  },
  button_login: {
    marginTop: 40,
    width: "82%",
    height: 60,
    borderRadius: 20,
    backgroundColor: "#218d91",
    alignItems: "center",
    justifyContent: "center"
  },
  txt_login: {
    color: "#cad4d5",
    fontSize: 20
  }
});

export default Login;
