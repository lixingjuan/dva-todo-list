import React from 'react';
import NewHigher from './components/Hoc'

@NewHigher
export default class Test extends React.Component {
  componentDidMount() {
    console.log('HOC')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>测试组件</div>
        <p>我理解的高阶组件是,这个HocF是使用高阶组件的地方,使用的使用,将该组件作为参数传递给高阶组件,然后高阶组件返回一个新的组件,展示在页面上</p>
        <div>{this.props.content}</div>
      </div>
    )
  }
}

// export default NewHigher(Test); 用装饰器或者用这个语法
