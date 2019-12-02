
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';


class TextInputLogin extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  };

  render() {
    return (
        <View style={styles.viewRowTextInput}>
        <Text style={styles.tittle}>{tittle}</Text>
        <TextInput style={styles.inputText} secureTextEntry={true}></TextInput>
        <TouchableOpacity style={{ marginRight: 6 }}>
          <Text>
          
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    // borderRadius: 5,
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    padding: 5
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

export default TextInputLogin;
