import React from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({  marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Flower Color :</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Violet</Option>
            <Option>Indigo</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Yellow</Option>
            <Option>Orange</Option>
            <Option>Red</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Occasion
            </Option>
            <Option>birthdays</Option>
            <Option>anniversaries</Option>
            <Option>weddings</Option>
            <Option>Mother's Day</Option>
            <Option>Valentine's Day</Option>
            <Option>Others</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option selected>Newest</Option>
            <Option selected>Price (asc)</Option>
            <Option selected>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
