// 倒入第三方库
import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

// 倒入工具类
import routes from './router';

// 倒入文件
import WYYAppHeader from './commonents/app-header';
import WYYAooFooter from './commonents/app-footer';
export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <WYYAppHeader />
        {renderRoutes(routes)}
        <WYYAooFooter />
      </HashRouter>
    </div>
  );
});
