import React, { Component } from 'react'
import Button from '../components/Button'
export default class index extends Component {
  componentDidMount() {
    console.log(1)
  }
  render() {
    return (
      <div>
        <Button />
        <Button />
        <Button />
      </div>
    )
  }
}

// import React, { Component } from 'react';
// import { Route, Switch, Redirect } from 'dva/router';
// import { connect } from 'dva';
// // import { getRoutes } from '../../src/utils/utils';
// // import { getRoutes } from '../../src/utils/router';

// @connect(({ global }) => ({
//   routerData: global.routerData,
// }))
// export default class RouteIndex extends Component {
//   render() {
//     const { match, routerData } = this.props;
//     const routes = getRoutes(match.path, routerData);
//     return (
//       <Switch>
//         {routes.map(item => (
//           <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
//         ))}
//         {routes.length > 0 ? (
//           <Redirect key={match.path} exact from={match.path} to={routes[0].path} />
//         ) : null}
//       </Switch>
//     );
//   }
// }
