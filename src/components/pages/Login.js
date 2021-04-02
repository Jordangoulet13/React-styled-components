import React, { useState } from "react";
import { PageLayout, Input, PasswordInput, Button } from "components/common";
import styled from "styled-components";
const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;
const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    e.persist();
    setFormFields((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <PasswordInput
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
        />
        <Button large>Login</Button>
        <div className="alt-text">or</div>
        <Button secondary>Register</Button>
      </Form>
    </PageLayout>
  );
};

export default Login;
