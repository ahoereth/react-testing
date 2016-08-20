import React from 'react';
var $ = require ('jquery');

export default class ApplicationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { applicationName: '', text: '' , src: ''};
  }

  handleApplicationNameChange(e) {
    this.setState({ applicationName: e.target.value });
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }

  handleImageChange(e) {
    this.setState({ src: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var applicationName = this.state.applicationName.trim();
    var filename = $('input[type=file]').val().split('\\').pop();
    var text = this.state.text.trim();
    if (!text || !applicationName) {
      return;
    }
    this.props.onApplicationSubmit({ applicationName: applicationName, text: text, src: filename });
    this.setState({ applicationName: '', text: '',src: '' });
  }

  render() {
    return (
      <div>
        <form className="applicationForm" onSubmit={this.handleSubmit}>
        <h3 className="applicationForm-heading">Add application</h3>
        (For display only)
        <label htmlFor="inputApplicationName" className="sr-only">Application name</label>
        <input
          type="text"
          id="inputApplicationName"
          placeholder="Application name"
          value={this.state.applicationName}
          onChange={this.handleApplicationNameChange}
          className="form-control form-control-upper"
          />
        <label htmlFor="inputApplicationDescription" className="sr-only">Description</label>
        <input
          type="text"
          id="inputApplicationDescription"
          placeholder="Description"
          value={this.state.text}
          onChange={this.handleTextChange}
          className="form-control form-control-lower"
          />
        <label htmlFor="inputApplicationScreenshot" className="sr-only">Application screenshot</label>
        <input
          type="file"
          id="inputApplicationScreenshot"
          placeholder=""
          value={this.state.src}
          onChange={this.handleImageChange}
          />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Post</button>
        </form>
      </div>);
  }
}
