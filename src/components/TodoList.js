import React, { Component } from "react";
import { Text, FlatList, Button, View, StyleSheet } from "react-native";

class TodoList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.todos}
          renderItem={({ item }) => (
            <View style={styles.todoList}>
              <Text
                onPress={() => this.props.onTodoClick(item.id)}
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoList: {
    marginBottom: 10,
    flexDirection: "row",
  },
});

export default TodoList;
