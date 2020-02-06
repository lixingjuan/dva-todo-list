import React, { Component } from 'react'
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

@connect()// 这
export default class index extends Component {
  /**
   * 按钮事件 - 跳转高阶组件示例页面
   * @memberof index
   */
  handleToHOC = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push({
      pathname: 'HocF',
    }));
  }

  /**
   * 按钮事件 - 跳转TodoList示例页面
   * @memberof index
   */
  handleToToDolist = () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push({
      pathname: 'ToDolist',
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToHOC}>跳转去高阶组件示例页面</button>
        <button onClick={this.handleToToDolist}>跳转去TodoList示例页面</button>
      </div>
    )
  }
}
