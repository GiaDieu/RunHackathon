import React from "react";
import { Grid } from "semantic-ui-react";
import strawberry from "../../images/strawberry.jpg";
import { GridImage } from "./ProductsElements";

const Products = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <GridImage src={strawberry} />
        </Grid.Column>
        <Grid.Column>
          <GridImage src={strawberry} />
        </Grid.Column>
        <Grid.Column>
          <GridImage src={strawberry} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <GridImage src={strawberry} />
        </Grid.Column>
        <Grid.Column>
          <GridImage src={strawberry} />
        </Grid.Column>
        <Grid.Column>
          <GridImage src={strawberry} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Products;
