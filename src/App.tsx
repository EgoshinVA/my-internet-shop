import React, {useState} from 'react';
import styled from "styled-components";
import {Item} from "./components/item/Item";
import {v1} from "uuid";

export type ItemType = {
    id: string
    title: string
    color: string
    description: string
    price: number
    size: number
}

function App() {
    const [items, setItems] = useState<ItemType[]>([
        {
            id: v1(),
            title: 'T-Shirt',
            color: 'red',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 800,
            size: 46
        },
        {
            id: v1(),
            title: 'Shoes',
            color: 'black',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 4000,
            size: 42
        },
        {
            id: v1(),
            title: 'Pants',
            color: 'white',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 4000,
            size: 50
        },
        {
            id: v1(),
            title: 'Jacket',
            color: 'yellow',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 3600,
            size: 52
        },
        {
            id: v1(),
            title: 'Cap',
            color: 'green',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 500,
            size: 1
        },
        {
            id: v1(),
            title: 'Socks',
            color: 'white',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 500,
            size: 45
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
            <ItemsBlock>
                {items.map(item => <Item key={item.id} title={item.title} color={item.color} size={item.size}
                                         price={item.price} description={item.description}/>)}
            </ItemsBlock>
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
