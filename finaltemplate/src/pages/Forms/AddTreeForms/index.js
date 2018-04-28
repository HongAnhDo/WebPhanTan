import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import firebase from '../../../data/Firebase'
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

class AddTreeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listSensor: []
    }

  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('sensors');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      if (snap != null) {
        const item = snap.val();
        var data = [];
        Object.keys(item).forEach(key => {
          // if (item[key].maCayKetNoi == null)
          data.push(key);

        });
        this.setState({
          listSensor: data
        });


      }
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header"><h4>Thêm cây</h4></div>
            <form className="form-horizontal" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
              <div className="content">
                <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Mã cây</label>
                  <div className="col-sm-9">
                    <Field
                      type="text"
                      name="maCay"
                      validate={[ required]}
                      component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Tên cây</label>
                  <div className="col-sm-9">
                    <Field
                      type="text"
                      name="tenCay"
                      validate={[ required]}
                      component={renderField} />
                  </div>
                </div>

                {/* <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Loại cây</label>
                  <div className="col-sm-9">
                    <Field
                      type="text"
                      name="loaiCay"

                      component={renderField} />
                  </div>
                </div> */}

                <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Lượng nước max</label>
                  <div className="col-sm-9">
                    <Field
                      type="number"
                      validate={[ required]}
                      name="luongNuocMax"
                      component={renderField} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Địa điểm</label>
                  <div className="col-sm-9">
                    <Field
                      type="text"
                      name="diaDiem"
                      validate={[ required]}
                      component={renderField} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Latitude</label>
                  <div className="col-sm-4" style={{ width: '32%' }}>
                    <Field
                      type="text"
                      name="lat"
                      validate={[ required]}
                      component={renderField} />
                  </div>
                  <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '100px' }}>Longitude</label>
                  <div className="col-sm-5"  style={{ width: '32%' }} >
                    <Field
                      type="text"
                      name="long"
                      validate={[ required]}
                      component={renderField} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Trạng thái</label>
                <div className="col-sm-9">
                  <Field name="trangThai" component='select'
                  validate={[ required]}>
                       <option/>
                      <option value="Sống" key ={"Sống"}>Sống</option>
                      <option value="Héo" key ={"Héo"}>Héo</option>
                      <option value="Đã chết" key ={"Đã chết"}>Đã chết</option>
                      <option value="Úng" key ={"Úng"}>Úng</option>
                    
                  </Field>

                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label" style={{ textAlign: 'left', width: '150px' }}>Chọn sensor</label>
                <div className="col-sm-9">
                  <Field name="maSensor" component='select' validate={[ required]}>
                  <option/>
                    {this.state.listSensor.map((item) =>

                      <option value={item} key ={item}>{item}</option>
                    )}
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
})(AddTreeForm);