import React from "react";
import {
  FormContainer,
  Icon,
  FormContent,
  FormWrapper,
  Form,
  FormH1,
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
          <Icon>KAO</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign In</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" />
              <FormButtonText to="/test">
                <FormButton type="submit">Continue</FormButton>
              </FormButtonText>
              <Text>Forgot your password ?</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default Login;
