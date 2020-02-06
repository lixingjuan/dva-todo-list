import React, { Component } from 'react'
import Todo from './components/Todo'
import { connect } from 'dva';
import uuid from 'uuid/v1'

import { Bind } from 'lodash-decorators'

@connect(({ todo }) => ({ todo, }))
export default class TodoPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  componentDidMount() {
    console.log('ce', this.props)
  }

  handleAddTodo(newItem) {
    this.props.dispatch({
      type: 'todo/add',
      payload:
        [
          {
            id: uuid(),
            todoItem: newItem
          }
        ]
    })
  }


  @Bind()
  handleDeleteTodo(id) {
    this.props.dispatch({
      type: 'todo/delete',
      payload: { id }
    })
  }

  render() {
    const { todoList } = this.props.todo
    return (
      <div>
        {/* <button onClick={() => this.handleAdd(5)}>添加项目</button> */}
        <div>
          <input
            style={{ borderWidth: 1, borderColor: 'red' }}
            placeholder="请输入代办事项"
            value={this.state.newTodo}
            onChange={(e) => this.setState({ newTodo: e.target.value })}
            onKeyDown={(e) => { if (e.keyCode === 13) { this.handleAddTodo(this.state.newTodo) } }}
          />
        </div>
        <Todo todoList={todoList} onDeleteTodo={this.handleDeleteTodo}></Todo>
      </div>
    )
  }
}



