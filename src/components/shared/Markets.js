import React from "react";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";

const MarketsContainer = styled.div`
  font-size: 1.2rem;
  width: 249px;
  height: 189px;
  margin-right: 8rem;
`;

const MarketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  line-height: 1.5rem;
`;

const MarketHeading = styled.h2`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const MarketSpan = styled.span`
  color: #ccc;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const MarketsItemsWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  gap: 24px;
`;

const MarketsItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const MarketsImageWrap = styled.div`
  font-size: 1rem;
  padding: 0 0.1rem;
  margin-right: 0.2rem;
`;

const MarketsImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`;

const MarketsContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin-top: 0.5rem;
`;

const MarketSubheading = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0 0.1rem 0;
  letter-spacing: 1px;
`;

const MarketTime = styled.span`
  font-size: 1rem;
  color: #a6a6a5;
  font-weight: 400;
  margin-bottom: 0.7rem;
`;

const MarketIconWrapper = styled.div`
  color: #a76f4f;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  letter-spacing: 1.1px;
  font-size: 1.1rem;
  line-height: 1.1rem;
`;

const Markets = () => {
  return (
    <MarketsContainer>
      <MarketsWrapper>
        <MarketHeading>Markets</MarketHeading>
        <MarketSpan>7+ markets near you</MarketSpan>
        <MarketsItemsWrapper>
          <MarketsItem>
            <MarketsImageWrap>
              <MarketsImage src="https://unsplash.it/500/500/" />
            </MarketsImageWrap>
            <MarketsContent>
              <MarketSubheading>Brooklyn Fruit Valley</MarketSubheading>
              <MarketTime>09:00 - 21:00</MarketTime>
              <MarketIconWrapper>
                <AiFillStar /> 4.9 |
                <GoLocation /> 2km
              </MarketIconWrapper>
            </MarketsContent>
          </MarketsItem>
          <MarketsItem>
            <MarketsImageWrap>
              <MarketsImage src="https://unsplash.it/500/500/" />
            </MarketsImageWrap>
            <MarketsContent>
              <MarketSubheading>Brooklyn Fruit Valley</MarketSubheading>
              <MarketTime>09:00 - 21:00</MarketTime>
              <MarketIconWrapper>
                <AiFillStar /> 4.9 |
                <GoLocation /> 2km
              </MarketIconWrapper>
            </MarketsContent>
          </MarketsItem>
        </MarketsItemsWrapper>
      </MarketsWrapper>
    </MarketsContainer>
  );
};

export default Markets;
