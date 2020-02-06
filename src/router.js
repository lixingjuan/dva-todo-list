import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: "/",
      component: () => import('./routes/index'),
      name: 'IndexPage'
    },
    {
      path: "/Button",
      component: () => import('./components/Button/index'),
      name: 'Button'
    }
  ];

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <div>
          {
            routes.map(({ path, name, ...dynamics }) => {
              const Component = dynamic({ app, ...dynamics })
              return (
                <Route path={path} key={name} exact
                  render={(props) => {
                    return (<Component {...props} />)
                  }} />
              )
            })
          }
        </div>
      </Switch>
    </ConnectedRouter>
    // <Router history={history}>

    // </Router>
  )
}

export default RouterConfig;

