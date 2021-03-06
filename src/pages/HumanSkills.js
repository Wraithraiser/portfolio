import React from 'react';
import { Row, Col, Card, Rate, Icon } from 'antd';
import { Link } from 'react-router-dom';
import persevere from '../persevere.png';
import integrity from '../integrity.png';
import empathy from '../empathy.png';
import teamwork from '../teamwork.png';
import failure from '../failure.png';

const HumanSkills = ({ match }) => (
  <Row className="content-row content-row-transparent">
    <Row type="flex" justify="space-around">
      <Col span={4}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/persevere`}>
            <Card
              className="card-skill"
              cover={<img alt="Persévérer" src={persevere} />}
              hoverable={true}
            >
              <div style={{ textAlign: 'center', lineHeight: '25px' }}>
                <span>
                  <strong>Persévérer</strong>
                </span>
                <Rate disabled allowHalf defaultValue={4.5} />
                <Rate
                  character={<Icon type="heart" />}
                  disabled
                  allowHalf
                  defaultValue={5}
                  style={{ color: 'red' }}
                />
              </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span={4}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/integrity`}>
            <Card
              className="card-skill"
              cover={<img alt="Intégrité" src={integrity} />}
              hoverable={true}
            >
              <div style={{ textAlign: 'center', lineHeight: '25px' }}>
                <span>
                  <strong>Intégrité</strong>
                </span>
                <Rate disabled allowHalf defaultValue={4} />
                <Rate
                  character={<Icon type="heart" />}
                  disabled
                  allowHalf
                  defaultValue={5}
                  style={{ color: 'red' }}
                />
              </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span={4}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/empathy`}>
            <Card
              className="card-skill"
              cover={<img alt="Empathie" src={empathy} />}
              hoverable={true}
            >
              <div style={{ textAlign: 'center', lineHeight: '25px' }}>
                <span>
                  <strong>Empathie</strong>
                </span>
                <Rate disabled allowHalf defaultValue={4} />
                <Rate
                  character={<Icon type="heart" />}
                  disabled
                  allowHalf
                  defaultValue={5}
                  style={{ color: 'red' }}
                />
              </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span={4}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/teamwork`}>
            <Card
              className="card-skill"
              cover={<img alt="Travail d'équipe" src={teamwork} />}
              hoverable={true}
            >
              <div style={{ textAlign: 'center', lineHeight: '25px' }}>
                <span>
                  <strong>Travail d'équipe</strong>
                </span>
                <Rate disabled allowHalf defaultValue={4.5} />
                <Rate
                  character={<Icon type="heart" />}
                  disabled
                  allowHalf
                  defaultValue={4}
                  style={{ color: 'red' }}
                />
              </div>
            </Card>
          </Link>
        </Row>
      </Col>
      <Col span={4}>
        <Row type="flex" justify="center">
          <Link to={`${match.url}/failure`}>
            <Card
              className="card-skill"
              cover={<img alt="Echec" src={failure} />}
              hoverable={true}
            >
              <div style={{ textAlign: 'center', lineHeight: '25px' }}>
                <span>
                  <strong>Échec</strong>
                </span>
                <Rate disabled allowHalf defaultValue={4} />
                <Rate
                  character={<Icon type="heart" />}
                  disabled
                  allowHalf
                  defaultValue={2}
                  style={{ color: 'red' }}
                />
              </div>
            </Card>
          </Link>
        </Row>
      </Col>
    </Row>
  </Row>
);

export default HumanSkills;
