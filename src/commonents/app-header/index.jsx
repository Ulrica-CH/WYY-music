import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { headerLinks } from '../../common/local-data';
import { HeaderWrapper, LeftContent, RightContent } from './style';
export default memo(function WYYAppHeader() {
  // 业务代码
  const showSelectItems = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact="true">
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <LeftContent>
          <a href="#/" className="logo sprite_01">
            aaa
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItems(item, index)}
                </div>
              );
            })}
          </div>
        </LeftContent>
        <RightContent>
          <Input
            placeholder="查找"
            className="search"
            prefix={<SearchOutlined />}
          ></Input>
          <div className="center">创作者中心</div>
          <div>登陆</div>
        </RightContent>
      </div>
      <div className="disider"></div>
    </HeaderWrapper>
  );
});
