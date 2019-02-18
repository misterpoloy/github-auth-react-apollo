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
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        { props.children }
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Juan Pablo Ortiz 2019 CodeChallenge for DevianArt
    </Footer>
  </Layout>
);
