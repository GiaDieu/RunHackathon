import React, { useState } from "react";
import { Container, Message, Header } from "semantic-ui-react";

const FoodIntro = () => {
  return (
    <Container>
      <Message>
        <Message.Content>
          <Message.Header>
            {" "}
            <Header as="h2">
              Intro
              <Header.Subheader>More about love</Header.Subheader>
            </Header>
          </Message.Header>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


        </Message.Content>
      </Message>
    </Container>
  );
};

export default FoodIntro;
