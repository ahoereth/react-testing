import React from 'react';
import Application from './application';
import {Row,Col} from 'reactstrap';

export default class ApplicationList extends React.Component {
  render() {
    return (
      <Row>
      {
        this.props.data.map(function(application) {
          return (
            <div className="application-cols" key={application.id}>
            <Col key={application.id} md={3}>
              <Application
                name={application.name}
                key={application.id}
                id={application.id}
                key={application.id}
                shortDescription={application.shortDescription}
                imageUrl={application.imageUrl}>
                {application.shortDescription}
              </Application>
            </Col>
            </div>
          );
        })
      }
      </Row>);
  }
}
