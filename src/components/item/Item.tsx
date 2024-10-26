import React from 'react';
import styled from "styled-components";

type ItemPropsType = {
    title: string
    color: string
    description: string
    price: number
    size: number
}

export const Item: React.FC<ItemPropsType> = (props) => {
    return (
        <StyledItem>
            <StyledName>{props.title}</StyledName>
            <StyledDescription>{props.description}</StyledDescription>
            <Size>Size: {props.size}</Size>
            <StyledColor color={props.color}></StyledColor>
            <Price>{props.price}P</Price>
        </StyledItem>
    );
};

const StyledItem = styled.div`
  border-radius: 15px;
  max-width: 200px;
  width: 150px;
  min-height: 250px;
  flex-grow: 1;
  background-color: #557A95;
  color: #B1A296;
  padding: 20px;
  position: relative;
`

const StyledName = styled.h2``

const StyledDescription = styled.p`
  margin-top: 10px;
`

const StyledColor = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 15px;
  height: 15px;
  border-radius: 5px;
  background-color: ${props => props.color || 'white'};
`

const Size = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
`

const Price = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
`