import React from 'react';
import { Layout, Menu, Card, Row, Col, Tabs, Collapse, Table, Badge, List, Avatar } from 'antd';
import {
  DashboardOutlined,
  HomeOutlined,
  BookOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  CommentOutlined,
  SettingOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './Dashboard.css';

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;
const { Panel } = Collapse;

// Sample data for demonstration purposes
const bookings = [
  { id: 1, name: 'John Doe', room: '101', status: 'Confirmed' },
  { id: 2, name: 'Jane Smith', room: '202', status: 'Pending' },
];

const payments = [
  { id: 1, user: 'John Doe', amount: '$200', status: 'Completed' },
  { id: 2, user: 'Jane Smith', amount: '$150', status: 'Pending' },
];

const reviews = [
  { id: 1, user: 'John Doe', comment: 'Great stay!', rating: 5 },
  { id: 2, user: 'Jane Smith', comment: 'Good service.', rating: 4 },
];

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />}>
            Room Management
          </Menu.Item>
          <Menu.Item key="3" icon={<BookOutlined />}>
            Booking Management
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            User Management
          </Menu.Item>
          <Menu.Item key="5" icon={<DollarOutlined />}>
            Payment & Transactions
          </Menu.Item>
          <Menu.Item key="6" icon={<BarChartOutlined />}>
            Reports & Analytics
          </Menu.Item>
          <Menu.Item key="7" icon={<CommentOutlined />}>
            Reviews & Feedback
          </Menu.Item>
          <Menu.Item key="8" icon={<SettingOutlined />}>
            Admin Settings
          </Menu.Item>
          <Menu.Item key="9" icon={<NotificationOutlined />}>
            Notification Center
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#fff' }} />
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card title="Total Bookings" bordered={false}>
                120
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Available Rooms" bordered={false}>
                45
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Revenue" bordered={false}>
                $12,000
              </Card>
            </Col>
          </Row>

          <Tabs defaultActiveKey="1" style={{ marginTop: '20px' }}>
            <TabPane tab="Room Management" key="1">
              <Collapse accordion>
                <Panel header="Manage Rooms" key="1">
                  <p>Add, edit, or remove room listings.</p>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Booking Management" key="2">
              <Table
                columns={[
                  { title: 'Booking ID', dataIndex: 'id', key: 'id' },
                  { title: 'Name', dataIndex: 'name', key: 'name' },
                  { title: 'Room', dataIndex: 'room', key: 'room' },
                  { title: 'Status', dataIndex: 'status', key: 'status' },
                ]}
                dataSource={bookings}
                rowKey="id"
              />
            </TabPane>
            <TabPane tab="User Management" key="3">
              <List
                itemLayout="horizontal"
                dataSource={bookings}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title={item.name}
                      description={`Booking Room: ${item.room}`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Payment & Transactions" key="4">
              <Table
                columns={[
                  { title: 'Payment ID', dataIndex: 'id', key: 'id' },
                  { title: 'User', dataIndex: 'user', key: 'user' },
                  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
                  { title: 'Status', dataIndex: 'status', key: 'status' },
                ]}
                dataSource={payments}
                rowKey="id"
              />
            </TabPane>
            <TabPane tab="Reports & Analytics" key="5">
              <p>Reports and analytics content goes here.</p>
            </TabPane>
            <TabPane tab="Reviews & Feedback" key="6">
              <List
                itemLayout="horizontal"
                dataSource={reviews}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={`${item.user} (Rating: ${item.rating})`}
                      description={item.comment}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Admin Settings" key="7">
              <p>Admin settings content goes here.</p>
            </TabPane>
            <TabPane tab="Notification Center" key="8">
              <Badge count={5} showZero>
                <p>New bookings and updates here.</p>
              </Badge>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
