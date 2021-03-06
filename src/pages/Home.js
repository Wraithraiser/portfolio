import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import dream from '../dream.jpg';

const About = props => (
  <Row
    className="content-row content-row-transparent"
    type="flex"
    align="middle"
  >
    <Row
      type="flex"
      justify="center"
      style={{ flexGrow: 1 }}
      className="quote-content"
    >
      <Col span={12}>
        <Card className="card-quote">
          <q>
            Notre vie est un voyage constant, de la naissance à la mort. Le
            paysage change, les gens changent, les besoins se transforment, mais
            le train continue. La vie, c'est le train, ce n'est pas la gare.
          </q>
          <p>- Paulo Coelho</p>
        </Card>
      </Col>
    </Row>
    <Row type="flex" justify="center" style={{ width: '100%' }}>
      <Col span={12}>
        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '18px',
            width: 200,
            height: 150
          }}
        >
          <Link to="/about" onClick={props.handleHrefClick}>
            <img
              alt="dream"
              src={dream}
              style={{
                borderRadius: '50%',
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                boxShadow: 'inset 0 0 1em gold, 0 0 2em aliceblue'
              }}
            />
          </Link>
        </div>
      </Col>
    </Row>
  </Row>
);

export default About;
