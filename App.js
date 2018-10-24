import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodoList from "./src/components/todo-list";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TodoList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7f8c8d',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10
    },
});
