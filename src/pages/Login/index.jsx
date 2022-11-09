import React, { Component } from "react";

//import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Icon } from "antd";
import "./login.css";
/*
    login menu
*/
class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const form = this.props.form;

    const values = form.getFieldsValue();

    //Unified calibration
    form.validateFields((err, values) => {
        if (!err) {
            console.log('Authentication success, submit login to send ajax request',values);
        } else {
            console.log('Verification failure')
        }
    })
  };

  validatorUser = (rule, value, callback) => {
    //console.log('vaildator',rule,value)
    if (!value) {
        callback("Username cannot be empty")
    } else if (value.length < 4) {
        callback("Length cannot exceed 12 characters")
    } else if (value.length > 12) {
        callback("Length cannot be less than 4 characters")
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)){
        callback("Username must be alphabetic or numeric or underscore");
    } else {
        callback();
    }
  }

  render() {
    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <div className="login-header">
          <h1>React administration system</h1>
        </div>
        <div className="login-content">
          <h2>Login </h2>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {validator : this.validatorUser}
                ],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                //Declarative validation
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Username cannot be empty",
                  },
                  { max: 12, message: "Length cannot exceed 12 characters" },
                  {
                    min: 4,
                    message: "Length cannot be less than 4 characters",
                  },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message:
                      "Username must be alphabetic or numeric or underscore",
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form>
        </div>
      </div>
    );
  }
  /*
    1.Front-end form validation
    2.Collect form input data
    */
}

export default Form.create()(Login);
