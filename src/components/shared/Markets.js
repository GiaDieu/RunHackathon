import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-right: 2rem;
`;
const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

const IconItem = styled.div`
  font-size: 0.8rem;
`;

const Markets = () => {
  return (
    <CardContainer>
      <Card>
        <CardTitle>Markets</CardTitle>
        <Card.Meta textAlign="center">7+ markets near you</Card.Meta>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image="https://unsplash.it/500/500/" />
              <Feed.Content>
                <Feed.Summary>Brooklyn Fruit Valley</Feed.Summary>
                <Feed.Meta content="09:00 - 21:00" />
                <IconWrapper>
                  <IconItem>
                    <Icon name="star" /> 4.9
                  </IconItem>
                  <IconItem>
                    <Icon name="location arrow " /> 0.3km
                  </IconItem>
                </IconWrapper>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
      <Card>
        <CardTitle>Markets</CardTitle>
        <Card.Meta textAlign="center">7+ markets near you</Card.Meta>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image="https://unsplash.it/500/500/" />
              <Feed.Content>
                <Feed.Summary>Brooklyn Fruit Valley</Feed.Summary>
                <Feed.Meta content="09:00 - 21:00" />
                <IconWrapper>
                  <IconItem>
                    <Icon name="star" /> 4.9
                  </IconItem>
                  <IconItem>
                    <Icon name="location arrow " /> 0.3km
                  </IconItem>
                </IconWrapper>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </CardContainer>
  );
};

export default Markets;
