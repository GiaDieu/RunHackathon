import React from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import DropdownSearchSelection from "./CardCountriesSelect";

const CardDetailContainer = styled.div`
  width: 350px;
  height: 420px;
  border: 1px solid #b3b3b3;
  border-radius: 15px;
`;

const CardDetailWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

const CardDetailHeading = styled.h3`
  display: inline-block;
  font-size: 1.8rem;
  text-align: left;
  line-height: 1.8rem;
  padding: 1rem 0 0 0;
`;

const CardDetailSubHeading = styled.h4`
  font-weight: 600;
  color: #b3b3b3;
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin-top: -0.1rem;
  margin-bottom: 2rem;
`;

const CardDetailSpan = styled.span`
  font-weight: 300;
  color: #b3b3b3;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 2rem;
`;

const CardDetailPrice = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
`;

const CardDetailRange = styled.progress`
  width: 100%;
  height: 15px;
`;

const CardDetailPriceTag = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const CardForm = styled.form`
  margin-top: 3rem;
  max-width: 440px;
  max-height: 240px;
  font-size: 1rem;
  border: 1px solid rosybrown !important;
  border-radius: 5px;
`;

const CardDetailButtonWrapper = styled.div`
  margin-top: 3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CardDetailBtn = styled.input`
  border: none;
  outline: none;
  padding: 0.8rem 2rem;
  border-radius: 15px;
  background: #ffd819;
  box-sizing: border-box;
  font-size: 1.2rem;
`;

const CardDetailIconWrap = styled.div`
  border: 1px solid #ccc;
  color: #000;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const CardDetailIcon = styled(FaRegHeart)`
  color: #b3b3b3;
`;
const CardDetail = () => {
  return (
    <CardDetailContainer>
      <CardDetailWrapper>
        <CardDetailHeading>Durian Mon Tong</CardDetailHeading>
        <CardDetailSubHeading>King Of Fruits</CardDetailSubHeading>
        <CardDetailSpan>15 - 25 kg</CardDetailSpan>
        <CardDetailPrice>
          <CardDetailRange />
          <CardDetailPriceTag>&#163;49,54</CardDetailPriceTag>
        </CardDetailPrice>
        <CardForm>
          <DropdownSearchSelection />
        </CardForm>
        <CardDetailButtonWrapper>
          <CardDetailBtn type="submit" value="ADD TO CART" />
          <CardDetailIconWrap>
            <CardDetailIcon />
          </CardDetailIconWrap>
        </CardDetailButtonWrapper>
      </CardDetailWrapper>
    </CardDetailContainer>
  );
};

export default CardDetail;
