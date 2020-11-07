import React from "react";
import FoodEnergy from "../shared/FoodEnergy";
import FoodCarousel from "../shared/FoodCarousel";
import FoodIntro from "../shared/FoodIntro";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import Markets from "../shared/Markets";
import CardDetail from "../CardDetail";

const HomeContainer = styled(Container)`
  font-size: 1.2rem;
  max-width: 1100px;
  width: 100vh;
  height: 100vh;
  margin-top: 5rem;
`;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodIntroWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1100px;
  gap: 5rem;
`;

const CardDetailWrap = styled.div`
  align-self: flex-end;
  margin-top: 10rem;
`;

const HomeListLocation = styled.div`
  align-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 2rem 3rem;
`;

const HomeListMarkets = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 5rem;
`;

const HomeListEnergy = styled.div`
  margin-top: 50%;
  font-size: 1.1rem;
  font-weight: 300;
`;
const Detail = () => {
  return (
    <Container>
      <HomeContainer>
        <HomeWrapper>
          <HomeListLocation>
            <FoodCarousel />
            <FoodIntroWrapper>
              <FoodIntro />
              <CardDetailWrap>
                <CardDetail />
              </CardDetailWrap>
            </FoodIntroWrapper>
          </HomeListLocation>
          <HomeListLocation>
            <HomeListMarkets>
              <Markets />
            </HomeListMarkets>
            <HomeListEnergy>
              <FoodEnergy />
            </HomeListEnergy>
          </HomeListLocation>
        </HomeWrapper>
      </HomeContainer>
    </Container>
  );
};

export default Detail;
