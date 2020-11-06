import React from "react";
import { Card, Grid } from "semantic-ui-react";
import strawberry from "../../images/strawberry.jpg";
import { Container } from "../GlobalStyle";
import { ProductsWrapper } from "./ProductsElements";
const Products = () => {
  return (
    <ProductsWrapper>
      <Container>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Card
                image={strawberry}
                header="Strawberry"
                meta="discount"
                description="strawberry is good for your help"
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={strawberry}
                header="Strawberry"
                meta="discount"
                description="strawberry is good for your help"
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={strawberry}
                header="Strawberry"
                meta="discount"
                description="strawberry is good for your help"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card
                image={strawberry}
                header="Strawberry"
                meta="discount"
                description="strawberry is good for your help"
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={strawberry}
                header="Strawberry"
                meta="discount"
                description="strawberry is good for your help"
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                image={strawberry}
                header="Strawberry"
                meta="discount"
                description="strawberry is good for your help"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
