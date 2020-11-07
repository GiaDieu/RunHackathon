import React from "react";
import { Container, Message, Header } from "semantic-ui-react";
import styled from "styled-components";

const FoodIntroWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 820px;
  margin: auto 0;
  margin-top: 10rem;
  letter-spacing: 1.4px;
  line-height: 2rem;
`;
const FoodIntro = () => {
  return (
    <Container>
      <FoodIntroWrapper>
        <Message>
          <Message.Content>
            <Message.Header>
              {" "}
              <Header as="h2">
                Intro
                <Header.Subheader>More about love</Header.Subheader>
              </Header>
            </Message.Header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus
            </p>
            <p>
              PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
          </Message.Content>
        </Message>
      </FoodIntroWrapper>
    </Container>
  );
};

export default FoodIntro;
