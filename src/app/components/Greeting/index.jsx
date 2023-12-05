import GreetingStyled from './styles';
import { Avatar, Button, Col, Image, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { DownloadOutlined } from '@ant-design/icons';

const Greeting = () => (
  <GreetingStyled>
    <Row>
      <Col xxl={15} className="greeting-container">
        <Title level={2}>
          Hi! I am <br />
          Phan Thanh Tam
        </Title>
        <Title level={2}>Frontend Developer</Title>
        <p>Welcome to my portfolio website!</p>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          size="large"
          className="download-cv-btn"
        >
          Download CV
        </Button>
      </Col>
      <Col xxl={9}>
        <Avatar
          src={<Image src="/avatar.png" alt="avatar" preview={false} />}
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 300,
          }}
        />
      </Col>
    </Row>
  </GreetingStyled>
);

export default Greeting;
