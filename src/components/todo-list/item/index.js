import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

class Item extends React.PureComponent {

    /**
     * fired when item is being pressed
     * @returns {*}
     */
    onPress = () => this.props.onPress(this.props.id);

    /**
     * fired when the trash icon is being pressed
     * @returns {*}
     */
    onTrashPressed = () => this.props.onDelete(this.props.id);

    render() {
        const { description, completed } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View style={styles.container}>
                    <Text style={completed ? styles.completed : styles.uncompleted}>{description}</Text>
                    <TouchableOpacity onPress={this.onTrashPressed}>
                        <FontAwesome name={'trash'} />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    completed: {
        textDecorationLine: 'line-through'
    },
    uncompleted: {
    }
});

Item.propTypes = {
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

Item.defaultProps = {
    completed: false
};

export default Item;
