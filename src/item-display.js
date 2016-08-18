import React from 'react';
import Application from './application';
import {Row,Col} from 'reactstrap';

export default class ItemDisplay extends React.Component {
  render() {
    return (
      <Row>
      {
            <Col key={application.id} md={3}>
              <Application
                name={application.name}
                id={application.id}
                key={application.id}
                shortDescription={application.shortDescription}
                imageUrl={application.imageUrl}>
                {application.description}
              </Application>
            </Col>
        })
      }
      </Row>);
  }
}
