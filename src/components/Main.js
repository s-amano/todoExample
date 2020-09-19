import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'

class Main extends Component {
  render(){
      return (
        <View style={styles.container}>
            <AddTodo />
            <VisibleTodoList />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 30 : 0,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  }
});
  
export default Main;