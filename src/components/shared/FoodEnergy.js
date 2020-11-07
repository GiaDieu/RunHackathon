import React from "react";
import wheat from "../../images/wheat.png";
import styled from "styled-components";
import { BiBoltCircle } from "react-icons/bi";

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
const CardContainer = styled.div`
  width: 280px;
  height: 380px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: border-box;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;
  gap: 15px;
  margin-bottom: 2rem;
  padding: 0 0 0 1rem;
`;

const CardWheatIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const CardFoodContent = styled.div`
  display: flex;
  flex-flow: column;
  font-size: 1rem;
  width: 100%;
`;

const CardHeading = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
`;

const CardSpan = styled.span`
  font-weight: 300;
  color: #ccc;
  margin-top: -0.7rem;
`;

const CardDetails = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 0 0 0 1rem;
`;

const CardHeadingDetails = styled.div`
  display: flex;
  flex-flow: row;
  width: 250px;
`;

const CardHeadingSpan = styled.h4`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2rem;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;
`;

const CardPercentage = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  line-height: 1.2rem;
  width: 100%;
  text-align: right;
  color: #ccc;
`;

const CardRange = styled.div`
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

const CardProgress = styled.progress`
  width: 254px;
  height: 2px;
  overflow: hidden;
  -webkit-appearance: none;
  background-color: "#FFEF9E";
`;

const CardHeaderWrapExtra = styled.div`
  margin-top: 2rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const CardFoodContentExtra = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-size: 1.2rem;
  margin: 0 auto;
  margin-right: 6rem;
`;

const CardIconExtra = styled(BiBoltCircle)`
  font-size: 2rem;
  width: 50px;
  height: 50px;
  margin-left: 1rem;
  margin-right: auto;
  color: #ffef9e;
  font-weight: bold;
`;
const CardHeadingExtra = styled.h3`
  font-size: 1.2rem;
  box-sizing: border-box;
  margin-left: -3rem;
`;

const CardSpanExtra = styled.span`
  font-size: 1rem;
  box-sizing: border-box;
  margin-left: -3rem;
  color: #b3b3b3;
  margin-top: -1rem;
`;

const FoodEnergy = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardHeaderWrap>
          <CardWheatIcon src={wheat} />
          <CardFoodContent>
            <CardHeading>Food Energy</CardHeading>
            <CardSpan>Consists 60% of total energy</CardSpan>
          </CardFoodContent>
        </CardHeaderWrap>
        <CardDetails>
          <CardHeadingDetails>
            <CardHeadingSpan>
              <strong>Fats</strong>95g
            </CardHeadingSpan>
            <CardPercentage>3%</CardPercentage>
          </CardHeadingDetails>
          <CardRange>
            <CardProgress min="1" max="10" value="6" />
          </CardRange>
          <CardHeadingDetails>
            <CardHeadingSpan>
              <strong>Proteins</strong>42g
            </CardHeadingSpan>
            <CardPercentage>6%</CardPercentage>
          </CardHeadingDetails>
          <CardRange>
            <CardProgress min="1" max="10" value="4" />
          </CardRange>
          <CardHeadingDetails>
            <CardHeadingSpan>
              <strong>Carbs</strong>270g
            </CardHeadingSpan>
            <CardPercentage>9%</CardPercentage>
          </CardHeadingDetails>
          <CardRange>
            <CardProgress min="1" max="10" value="3" />
          </CardRange>
          <CardHeadingDetails>
            <CardHeadingSpan>
              <strong>Water</strong>400g
            </CardHeadingSpan>
            <CardPercentage>20%</CardPercentage>
          </CardHeadingDetails>
          <CardRange>
            <CardProgress min="1" max="10" value="7" />
          </CardRange>
        </CardDetails>
      </CardContainer>

      <CardHeaderWrapExtra>
        <CardIconExtra>
          <BiBoltCircle />
        </CardIconExtra>
        <CardFoodContentExtra>
          <CardHeadingExtra>Calorific Value</CardHeadingExtra>
          <CardSpanExtra>1470ccal | 37%</CardSpanExtra>
        </CardFoodContentExtra>
      </CardHeaderWrapExtra>
    </CardWrapper>
  );
};

export default FoodEnergy;
