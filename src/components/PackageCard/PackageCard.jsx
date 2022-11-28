import React from 'react';
import { Col, Row, Divider } from 'antd';
import { Tag } from '../../components';

import './package-card.scss';

const PackageCard = ({ packageDetail }) => {
  const { amount, currency, details, imagePath, name, tags, selected } = packageDetail;

  return (
    <Row className={`package-card-container ${selected ? 'selected' : ''}`}>
      <Col span={10}>
        <img className="image" src={imagePath} alt="Paris" />
      </Col>
      <Col span={14}>
        <div className="package-container">
          <div className="package-header">
            <span className="title">{name}</span>
            <span className="title">
              {amount}
              {currency}
            </span>
          </div>
          <Row>
            {details?.map(item => (
              <Col key={item} xs={24} md={8} className="package-detail">
                <i className="icon icon-ellipse"></i>
                <span className="detail"> {item} </span>
              </Col>
            ))}
          </Row>
          <Divider />
          {tags?.map(item => (
            <Tag key={item} color="default">
              {item}
            </Tag>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default PackageCard;
