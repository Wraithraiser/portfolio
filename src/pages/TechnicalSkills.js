import React from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';
import { Link } from "react-router-dom";
import htmlCSS from '../html-css.png';
import webpack from '../webpack.png';
import practice from '../practice.png';
import database from '../database.png';

const TechnicalSkills = ({match}) => (
  <Row className= "content-row">
    <Row type="flex">
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/htmlCSS`}>
            <Card
            className='card-skill'
            cover={<img alt="Html et CSS" src={htmlCSS} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>HTML5 & CSS3</strong></span>
              <Rate disabled allowHalf defaultValue={4} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/javascript`}>
            <Card
            className='card-skill'
            cover={<img alt="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>JavaScript</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span = {8}>
        <Row type="flex" justify="center">
        <Link to={`${match.url}/webpack`}>
            <Card
            className='card-skill'
            cover={<img alt="Webpack" src={webpack} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>Webpack</strong></span>
              <Rate disabled allowHalf defaultValue={3.5} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
      </Row>
      <br/>
      <Row type="flex">
      <Col span = {12}>
        <Row type="flex" justify="center">
        <Link to={`${match.url}/practice`}>
            <Card
            className='card-skill'
            cover={<img alt="BDD et TDD" src={practice} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>BDD & TDD</strong></span>
              <Rate disabled allowHalf defaultValue={3} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={5} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span = {12}>
        <Row type="flex" justify="center">
        <Link to={`${match.url}/database`}>
            <Card
            className='card-skill'
            cover={<img alt="Base de données" src={database} />}
            hoverable={true}
            >
            <div style={{ textAlign: 'center', lineHeight: '25px' }}>
              <span><strong>Base de données</strong></span>
              <Rate disabled allowHalf defaultValue={4} />
              <Rate character={<Icon type="heart" />} disabled allowHalf defaultValue={4} style={{ color: 'red' }}/>
            </div>
            </Card>
          </Link>
        </Row>
      </Col>
    </Row>
  </Row>
);

export default TechnicalSkills;
