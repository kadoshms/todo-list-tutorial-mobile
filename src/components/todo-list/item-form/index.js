import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

class ItemForm extends React.PureComponent {

    state = {
        value: ''
    };

    /**
     * fired when item is being pressed
     * @returns {*}
     */
    onSubmit = () => {
        this.props.onSubmit(this.state.value);

        this.setState({
            value: ''
        });
    };

    /**
     * fired when input text is changed
     * @param value
     * @returns {void|*}
     */
    onChangeValue = (value) => this.setState({ value });

    render() {
        return (
            <View>
                <TextInput onChangeText={this.onChangeValue}
                           value={this.state.value}
                           placeholder={'Type here...'}
                />
                <Button title={'Add'} onPress={this.onSubmit}/>
            </View>
        );
    }
}

ItemForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
