import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {
    View,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';


class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }
    }

    _addTodo () {
        this.props.dispatch(addTodo(this.state.text))
        this.setState({ 
            text: "" ,
        })
        
    }

    render() {
        return (
            <View>
                <TextInput
                    type="todoName"
                    style={style.input}
                    value={this.state.text}
                    onChangeText={text => this.setState({text})}
                />
                <Button title='追加' onPress={() => this._addTodo()} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
}) 

AddTodo = connect()(AddTodo)

export default AddTodo