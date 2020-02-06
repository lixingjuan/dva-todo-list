import dva from 'dva';
import './index.css';

// user BrowserHistory
import { createBrowserHistory as createHistory } from 'history';

const basePath = process.env.BASE_PATH;
const browserHistoryBuildOptions = {};

if (basePath !== '/') {
  browserHistoryBuildOptions.basename = basePath;
}

// 1. Initialize
const app = dva({
  history: createHistory(browserHistoryBuildOptions),
});


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/products'));
// 引入model
app.model(require('./models/todo').default);


// 4. Router
// 引入路由文件
app.router(require('./router').default);

// 5. Start
app.start('#root');
