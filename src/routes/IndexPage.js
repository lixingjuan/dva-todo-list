import React from 'react';
import { Link } from 'react-router'

// 父组件向子组件传值
class Son extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/todopage">去todoList页面</Link>
        {/* <Route path="/TodoPage" component={TodoPage} >去todoList页面</Route> */}
        <input onChange={this.props.onChange} />
      </div>

    )
  }
}

class Father extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      son: ''
    }
  }
  changeHandler(e) {
    this.setState({
      son: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Son onChange={this.changeHandler.bind(this)}></Son>
        <p>这里显示Son组件的内容{this.state.son}</p>

      </div>
    )
  }
}

// IndexPage.propTypes = {
// };

export default Father;
// export default connect()(IndexPage);
