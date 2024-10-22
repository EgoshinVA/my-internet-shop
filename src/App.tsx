import React, {useState} from 'react';
import styled from "styled-components";
import {Item} from "./components/item/Item";
import {v1} from "uuid";

function App() {
    const [items, setItems] = useState([
        {
            id: v1(),
            title: 'T-Shirt',
            color: 'white',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: v1(),
            title: 'Shoes',
            color: 'black',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: v1(),
            title: 'Pants',
            color: 'white',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: v1(),
            title: 'Jacket',
            color: 'brown',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: v1(),
            title: 'cap',
            color: 'blue',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: v1(),
            title: 'Socks',
            color: 'red',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ])

    return (
        <StyledApp>
            <StyledFilter>
                <StyledFilterItem>
                    <select>
                        <option value="any">Все цвета</option>
                        <option value="white">Белый</option>
                        <option value="black">Черный</option>
                        <option value="grey">Серый</option>
                        <option value="brown">Коричневый</option>
                        <option value="blue">Синий</option>
                        <option value="red">Красный</option>
                        <option value="green">Зеленый</option>
                    </select>
                </StyledFilterItem>

            </StyledFilter>
            <ItemsBlock><Item/></ItemsBlock>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
  padding: 20px;
`

const StyledFilter = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const StyledFilterItem = styled.div``

const StyledFilterInput = styled.input.attrs(() => ({
    type: "checkbox"
}))``

const ItemsBlock = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`
