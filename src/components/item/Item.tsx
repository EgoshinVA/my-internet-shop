import React from 'react';
import styled from "styled-components";

export const Item = () => {
    return (
        <StyledItem>
            <StyledName>Item</StyledName>
            <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledDescription>
        </StyledItem>
    );
};

const StyledItem = styled.div`
  border-radius: 15px;
  max-width: 200px;
  width: 150px;
  min-height: 250px;
  flex-grow: 1;
  background-color: #353535;
  color: white;
  padding: 20px;
`

const StyledName = styled.h2``

const StyledDescription = styled.p`
  margin-top: 10px;
`