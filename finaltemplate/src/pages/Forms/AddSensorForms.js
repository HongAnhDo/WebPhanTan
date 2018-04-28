import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import firebase from '../../data/Firebase'
import renderField from 'components/FormInputs/renderField';
import _ from 'lodash';



const required = value => value ? undefined : 'Required';
const validate = values => {
  const errors = {};
  if (!values.required) {
    errors.required = 'This field is required';
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (values.number && _.isNaN(values.number)) {
    errors.number = 'Please enter a number';
  }
  if (values.url && !/^https?:\/\//i.test(values.url)) {
    errors.url = 'Please enter a valid URL';
  }
  if (values.equal1 && values.equal1 !== values.equal2) {
    errors.equal2 = 'Does not match';
  }
  return errors;
}

class AddSensor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listSensor: []
    }

  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header"><h4>Thêm sensor</h4></div>
            <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
              <div className="content">
                <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Mã sensor</label>
                  <div className="col-sm-9">
                    <Field
                      type="text"
                      name="maCay"
                      validate={[ required]}
                      component={renderField} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Cây kêt nối</label>
                <div className="col-sm-9">
                  <Field name="trangThai" component='select'
                  validate={[ required]}>
                       <option/>
                      <option value="AQ-001" key ={"AQ-001"}>AQ-001</option>
                      <option value="AQ-005" key ={"AQ-005"}>Héo</option>
                      <option value="AQ-003" key ={"AQ-003"}>Đã chết</option>
                      <option value="AQ-006" key ={"AQ-006"}>Úng</option>
                    
                  </Field>

                </div>
              </div>
             
              <div className="footer text-center">
                <button type="submit" className="btn btn-info btn-fill">Thêm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'validationForm',
  validate
})(AddSensor);