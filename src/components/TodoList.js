import React, { Component } from 'react'
import { 
    Text,
    FlatList,
    Button,
    View,
    StyleSheet
} from 'react-native'

class TodoList extends Component {
    render() {
        return(
            <View>
                <FlatList 
                    data={this.props.todos}
                    renderItem={({item}) => 
                        <View style={style.todoList}>
                            <Text>
                                {item.text}
                            </Text>
                        </View>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    todoList: {
      marginBottom: 10,
      flexDirection: "row"
    }
}) 

export default TodoList