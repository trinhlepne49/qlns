
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
  FlatList
} from 'react-native';
import { Useritem } from '../../components'

const data = [
  {
    "id": "12",
    "name": "Trung",
    "age": "22",
    "adress": "Tra Vinh"
  },
  {
    "id": "12",
    "name": "VInh",
    "age": "22",
    "adress": "Tra Vinh"
  },
  {
    "id": "12",
    "name": "Trung",
    "age": "22",
    "adress": "Tra Vinh"
  },
  {
    "id": "12",
    "name": "Trung",
    "age": "22",
    "adress": "Tra Vinh"
  },
  {
    "id": "12",
    "name": "Trung",
    "age": "22",
    "adress": "Tra Vinh"
  },
  {
    "id": "12",
    "name": "Trung",
    "age": "22",
    "adress": "Tra Vinh"
  },
];

class ListUsers extends React.Component {

  static navigationOptions = {
    gesturesEnabled: false,
    title: "List User",
    // header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  _renderItemUser = (names, age, adress) => {
    return (
    <Useritem
        name={names}
        dob={age}
        adress={adress}
    />
    )
  };
  _renderItem = (id, name, age, adress) => {
    agec = parseInt(age)
    console.log("__________log", agec)
    if (agec > 21) {
      return (
        <TouchableOpacity style={styles.item}
          onPress={
            () => { this.props.navigation.navigate("XinPhep") }
          }
        >
          <View style={{ width: "20%", height: "100%", backgroundColor: "#0E2A1E", borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}>

          </View>
          <View style={{ width: "80%", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}>
            <Text style={styles.textItem}>ID    : {id}</Text>
            <Text style={styles.textItem}>Name  : {name}</Text>
            <Text style={styles.textItem}>Age   : {age}</Text>
            <Text style={styles.textItem}>Adress: {adress}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          
          <FlatList
            style={{ flex: 1 }}
            data={data}
            numColumns={1}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              this._renderItemUser(item.name, item.age, item.adress)
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default ListUsers;
