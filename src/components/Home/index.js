import React from "react";
import ProductItem from "../../components/shared/ProductItem";
import FoodEnergy from "../../components/shared/FoodEnergy";
import Markets from "../../components/shared/Markets";
import AddToCart from "../../components/shared/AddToCart";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

const HomeContainer = styled(Container)`
  font-size: 1.2rem;
  /* max-width: 1100px; */
  /* width: 100vh; */
  /* height: 100vh; */
  margin-top: 3rem;
  padding: 0 10px;
`;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;
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
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const Home = () => {
  return (
    <Container>
      <HomeContainer>
        <HomeWrapper>
          <HomeLeftSide>
            <AddToCart />
          </HomeLeftSide>
          <HomeRightSide>
            <HomeRightWrapper>
              <HomeListItems>
                <ProductItem />
              </HomeListItems>
              <HomeListLocation>
                <Markets />
                <Markets />
                <FoodEnergy />
              </HomeListLocation>
            </HomeRightWrapper>
          </HomeRightSide>
        </HomeWrapper>
      </HomeContainer>
    </Container>
  );
};

export default Home;
