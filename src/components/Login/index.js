import React from "react";
import {
  FormContainer,
  Icon,
  FormContent,
  FormWrapper,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  FormButtonText,
  Text,
} from "./LoginElements";

const Login = () => {
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <Icon />
          <FormContent>
            <Form>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" />
              <Text>Forgot your password?</Text>
              <FormButtonText to="/assistant">
                <FormButton type="submit">Log In</FormButton>
              </FormButtonText>
            </Form>
          </FormContent>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default Login;
