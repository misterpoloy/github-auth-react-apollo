import React from 'react';
import { Layout } from 'antd';
import Header from '../Header/Header';

const { Content, Footer } = Layout;

const styles = {
  layout: { height: '-webkit-fill-available' },
}
export default props => (
  <Layout style={ styles.layout } className="layout">
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
  </Layout>
);
