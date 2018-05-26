import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setExampleText } from '../redux/actions';

class ExampleScreen extends PureComponent {

    onPressTextExample = () => {
        this.props.setExampleText("Hello from Reducer!");
    }

    render() {
        const { buttonStyle, textStyle, container, buttonContainer } = style;

        return (
            <View>
                <View>
                    <Text >
                        Redux Example Page
                    </Text>
                </View>
                <View style={buttonContainer}>
                    <TouchableOpacity style={buttonStyle} onPress={this.onPressTextExample}>
                        <Text style={textStyle}>Click Action</Text>
                    </TouchableOpacity>
                    <Text>{this.props.exampleText}</Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
    },
    buttonContainer: {
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
});


const mapStateToProps = state => {
    const { exampleText } = state.example;
    return {
        exampleText
    }
}

export default connect(mapStateToProps, { setExampleText })(ExampleScreen);