
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
import { TextProFile } from "../../components"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class FormXinPhep extends React.Component {

  // static navigationOptions = {
  //   title="GO"
  // };

  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  };


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.container}>
              <TextProFile
                name="Name"
                value="Le Minh Trung"
              />
              <TextProFile
                name="Adress"
                value="Tra Vinh"
              />
              <TextProFile
                name="Age"
                value="21"
              />
              <TextProFile
                name="Date"
                value="Male"
              />
              <TextProFile
                name="Phone Number"
                value="096"
              />

          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3FFCD",
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  viewRowTextInput: {
    padding: 4,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#003233",
    flexDirection: "row",
    borderRadius: 10,
    width: "90%",
    alignContent: "flex-start",
    marginBottom: 10,
    marginTop: 10
  },
  tittle:
  {
    marginLeft: 3,
    marginRight: 3
  },
  inputText: {
    width: "58%",
    marginRight: 8
  },
  button: {
    height: 50,
    width: "50%",
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#003233",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FormXinPhep;
