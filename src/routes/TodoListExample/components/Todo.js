import React, { Component } from 'react'

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childText: 'child'
    }
  }

  render() {
    console.log(this.props)
    const { todoList,onDeleteTodo} = this.props
    return (
      <ul>
        {
          todoList.map((item, index) => {
            return (
              <li key={index}>
                {item.todoItem}
                <button onClick={() => onDeleteTodo(item.id)}>删除</button>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
