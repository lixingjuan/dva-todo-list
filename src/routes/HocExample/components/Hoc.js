import React from 'react'

function NewHigher(ComponentTest){
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
          content: '我是高阶组件的内容'
      }
   }

    render() {
      return (
        <div>
           <h2>高阶组件</h2>
           <ComponentTest content={this.state.content}/>
        </div>
      )
    }
  }

  return NewComponent

}

export default NewHigher;
