
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
  FlatList,
  Alert
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class ListXinPhep extends React.Component {

  static navigationOptions = {
    gesturesEnabled: false,
    title: "List User",
    // header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      show: undefined
    };
  }

  _renderItem = (id, name, age, adress, color) => {
    return (
      <TouchableOpacity style={styles.item}
        onPress={
          () => { this.props.navigation.goBack() }
        }
      >
        <TouchableOpacity style={{ width: "20%", height: "100%", backgroundColor: color ? undefined : "#A27AFF", borderRadius: 100 }}
          onPress={() => {
            Alert.alert(
              'Alert Title',
              'My Alert Msg',
              [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
          }}
        >

        </TouchableOpacity>
        <View style={{ width: "80%", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}>
          <Text style={styles.textItem}>ID    : {id}</Text>
          <Text style={styles.textItem}>Name  : {name}</Text>
          <Text style={styles.textItem}>Age   : {age}</Text>
          <Text style={styles.textItem}>Adress: {adress}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView>
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
            {this._renderItem("12", "Lê Minh Trung", "22", "K4-P5-TV")}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3FFCD",
    // alignItems: "center"
  },
  item: {
    alignItems: "center",
    width: "90%",
    height: 120,
    backgroundColor: "#007571",
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    alignContent: "center",
    marginLeft: 20,
    flexDirection: "row"
  },
  touchableOpacity: {

  },
  textItem: {
    color: "#A3FFCD",
  }
});

export default ListXinPhep;
