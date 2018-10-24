import React from 'react';
import TodoListCore from './../../modules/core/components/todo-list/';
import Item from './item';
import ItemForm from './item-form';
import {StyleSheet, Text, TextInput, View, Button} from "react-native";

class TodoList extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>My To-Do List</Text>
                </View>
                <View>
                    {
                        this.props._items.map(
                            (it) => (
                                <Item onPress={this.props._toggleItemCompleteionById}
                                      onDelete={this.props._deleteItemById}
                                      key={it.id}
                                      {...it}
                                />
                            )
                        )
                    }
                </View>
                <View style={styles.formContainer}>
                    <ItemForm onSubmit={this.props._addItem} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0'
    },
    formContainer: {
        padding: 5
    },
    title: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default TodoListCore(TodoList);
