import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, rgba(#fff, 0.4) 0%, rgba(#ccc, 0.1) 100%);
`;

export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 2rem;
  margin-top: 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  @media screen and (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 3rem;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 5rem 2rem;
  font-family: "Tajawal";
  @media screen and (max-width: 400px) {
    padding: 2rem;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  font-size: 20px;
  text-align: center;
  color: #000;
  font-weight: 400;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000;
`;

export const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  background-color: #ffffff;
  margin-bottom: 2rem;
`;

export const FormButton = styled.button`
  background: #ffd819;
  width: 176px;
  height: 42px;
  border: none;
  border-radius: 9px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButtonText = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  justify-content: center;
  width: 450;
  font-family: "Tajawal";
`;

export const Text = styled.span`
  text-align: right;
  margin-top: 1.5rem;
  color: #000;
  font-size: 11px;
  margin-top: -2rem;
  font-family: "Tajawal";
  font-weight: normal;
  line-height: 14.2px;
  color: rgba(0, 0, 0, 0.6);
`;
