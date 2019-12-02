
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



class Useritem extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            show: true
        };
    };

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                {/* <View style={styles.container_in}> */}
                    {/* avata user */}
                    <View style={styles.avata}>
                        <View style={styles.image}>
                            
                        </View>
                    </View>
                    {/* info */}
                    <View style={styles.info}>
                        <Text style={styles.txtinfo}>Họ tên: {this.props.name ? this.props.name : "null"}</Text>
                        <Text style={styles.txtinfo}>Ngày sinh: {this.props.dob ? this.props.dob : "null"}</Text>
                        <Text style={styles.txtinfo}>Chức vụ: {this.props.adress ? this.props.adress : "null"}</Text>
                    </View>
                {/* </View> */}
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,

        marginTop: 12,
        height: 140,
        width: "90%",
        backgroundColor: "#25a6ab",
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        flexDirection: 'row',
        flexWrap:"wrap",
        alignItems: 'center',
    },
    avata:{
        height: "100%",
        width: "32%",
        borderRadius: 10,
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        backgroundColor: "white",
        height: 80,
        width: 80,
        borderRadius: 12,
        borderWidth: 1,
        borderColor:'black'
    },
    info: {
        height: "100%",
        width: "68%",
        justifyContent: "center"
        // backgroundColor:'red'
    },
    txtinfo:{
        fontSize: 17,
        color:"black",
        marginLeft: 5
    }
    
});

export default Useritem;
