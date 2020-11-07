import React from "react";
import ProductItem from "../shared/ProductItem";
import FoodEnergy from "../shared/FoodEnergy";
import FoodCarousel from "../shared/FoodCarousel";
import FoodIntro from "../shared/FoodIntro";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

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
`;

const HomeLeftSide = styled.div``;

const HomeRightSide = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
`;

const HomeRightWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

const HomeListItems = styled.div`
  margin-left: -1.3rem;
`;

const HomeListLocation = styled.div`
  align-content: center;
  flex-direction: column;
  align-items: center;
`;
const Detail = () => {
  return (
    <Container>
      <HomeContainer>
        <HomeWrapper>
          <HomeListLocation>
            <FoodCarousel />
            <FoodIntro />
          </HomeListLocation>
          <HomeListLocation>
            <FoodEnergy />
          </HomeListLocation>
        </HomeWrapper>
      </HomeContainer>
    </Container>
  );
};

export default Detail;
