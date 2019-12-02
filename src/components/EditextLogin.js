
import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';



class EditextLogin extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    };

    render() {
        return (
            <View style={styles.container}>
                {/* title */}
                <Text>{this.props.titile ? this.props.titile : "null"}</Text>
                <View style={styles.view_text}>
                    <TextInput
                     style={styles.text_input}
                    />
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: 52,
        width: "90%",
    },
    view_text: {
        marginBottom: 14,
        width: "0%",
        height: 46,
        backgroundColor: 'white',
        borderWidth: 0.8,
        borderColor: "black",
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: "center"
    },

});

export default EditextLogin;
