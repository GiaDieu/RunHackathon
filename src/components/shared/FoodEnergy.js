import React, { useState } from "react";
import { Container, Card, Feed, Form, Label } from "semantic-ui-react";
import styled from "styled-components";

const Markets = () => {
  const state = 800;
  const [duration, setDuration] = useState(state);
  const handleChange = (e) => {
    setDuration(e.target.value);
  };
  return (
    <Card>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image="https://unsplash.it/500/500/" />
            <Feed.Content>
              <Feed.Summary>Food Energy</Feed.Summary>
              <Feed.Meta content="Consists 60% of total energy" />
            </Feed.Content>
          </Feed.Event>
        </Feed>

        <Label>
          Fats
          <Label.Detail>95g</Label.Detail>
        </Label>
        <Form.Input
          min={100}
          max={2000}
          name="duration"
          onChange={handleChange}
          step={100}
          type="range"
          value={duration}
        />
        <Label>
          Proteins
          <Label.Detail>42g</Label.Detail>
        </Label>
        <Form.Input
          min={100}
          max={2000}
          name="duration"
          onChange={handleChange}
          step={100}
          type="range"
          value={duration}
        />
        <Label>
          Carbs
          <Label.Detail>270g</Label.Detail>
        </Label>
        <Form.Input
          min={100}
          max={2000}
          name="duration"
          onChange={handleChange}
          step={100}
          type="range"
          value={duration}
        />
        <Label>
          Water
          <Label.Detail>400g</Label.Detail>
        </Label>
        <Form.Input
          min={100}
          max={2000}
          name="duration"
          onChange={handleChange}
          step={100}
          type="range"
          value={duration}
          color="yellow"
        />
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image="https://unsplash.it/500/500/" />
            <Feed.Content>
              <Feed.Summary>Carlorific Value</Feed.Summary>
              <Feed.Meta content="1470 ccal  37%" />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
    </Card>
  );
};

export default Markets;
