import styles from './index.css';
import SiderMenu from '../components/SiderMenu';
import { Layout } from 'antd';

function BasicLayout(props) {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <SiderMenu />
    </Layout>
  );
}

export default BasicLayout;
