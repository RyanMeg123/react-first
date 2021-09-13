import "./Login.scss";
import { Form, Input, Button, Checkbox, Card } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/reducers/auth";

const Login = () => {
  // hook
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = values => {
    console.log("Success:", values);
    const { password, username } = values;
    login(username, password);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  const login = async (email, password) => {
    try {
      setLoading(true);
      setTimeout(() => {
        dispatch(loginUser("token"));

        history.push("/");
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error, "0000");
    }
  };

  return (
    <div className="login-box">
      <Card className="login-card">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              onClick={login}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
