import React from 'react';
import { Layout, Spin } from 'antd';
import Header from '../Header/Header';
import STATUS from '../../constants/status';

const { Content, Footer } = Layout;

const styles = {
  layout: { minHeight: '100vh' },
}
export default props => (
  <Layout style={ styles.layout } className="layout">
    { props.status === STATUS.LOADING ? (
      <div><Spin />Waiting for Gatekeeper server...</div>
    ) : (
      <div>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ padding: 24, minHeight: '80vh' }}>
            { props.children }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <a href="http://juanpablo.xyz">juanpablo.xyz </a>
          | 2019 | 
          <a href="https://twitter.com/janpoloy"> @janpoloy</a>
        </Footer>
      </div>
    )}
  </Layout>
);
