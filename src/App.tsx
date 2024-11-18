import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Item} from "./components/item/Item";
import {v1} from "uuid";
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";
import {Selector} from "./components/selector/Selector";

export type ItemType = {
    id: string
    title: string
    color: string
    description: string
    price: number
    size: number
}

export type ColorType = {
    value: string
    color: string
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
    const [value, setValue] = useState<string>('');

    const ColorsValues: ColorType[] = [
        {value: '', color: 'all'},
        {value: '1', color: 'red'},
        {value: '2', color: 'yellow'},
        {value: '3', color: 'white'},
        {value: '4', color: 'black'},
        {value: '5', color: 'green'},
    ]

    const [minPrice, setMinPrice] = useState<number>()
    const [maxPrice, setMaxPrice] = useState<number>()

    const [minSize, setMinSize] = useState<number>()
    const [maxSize, setMaxSize] = useState<number>()

    if (minPrice === 0) setMinPrice(undefined)
    if (maxPrice === 0) setMaxPrice(undefined)
    if (minSize === 0) setMinSize(undefined)
    if (maxSize === 0) setMaxSize(undefined)

    let filteredItems = items

    const onMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.currentTarget.value))
    }

    const onMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.currentTarget.value))
    }

    const onMinSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMinSize(Number(event.currentTarget.value))
    }

    const onMaxSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxSize(Number(event.currentTarget.value))
    }

    if (minPrice) filteredItems = filteredItems.filter(item => item.price >= minPrice)
    if (maxPrice) filteredItems = filteredItems.filter(item => item.price <= maxPrice)
    if (minSize) filteredItems = filteredItems.filter(item => item.size >= minSize)
    if (maxSize) filteredItems = filteredItems.filter(item => item.size <= maxSize)
    const selectedValue = ColorsValues.find(item => item.value === value)
    if (value && selectedValue) filteredItems = filteredItems.filter(item => item.color === selectedValue.color)

    return (
        <StyledApp>
            <StyledFilter>
                <Selector value={value} items={ColorsValues} onChange={setValue}/>
                <FilterBlock>
                    <p>Цена:</p>
                    <StyledInput placeholder={'От:'} value={minPrice} onChange={onMinPriceChange}/>
                    <StyledInput placeholder={'До:'} value={maxPrice} onChange={onMaxPriceChange}/>
                </FilterBlock>
                <FilterBlock>
                    <p>Размер:</p>
                    <StyledInput placeholder={'От:'} value={minSize} onChange={onMinSizeChange}/>
                    <StyledInput placeholder={'До:'} value={maxSize} onChange={onMaxSizeChange}/>
                </FilterBlock>
            </StyledFilter>
            <ItemsBlock>
                {filteredItems.map(item => <Item key={item.id} title={item.title} color={item.color} size={item.size}
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
    align-items: center;
`

const ItemsBlock = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

const FilterBlock = styled.div`
    display: flex;
    border: 1px solid #48474b;
    padding: 12.5px;
    border-radius: 5px;
    align-items: center;
    margin-right: 5px;
`

const StyledInput = styled.input.attrs(({type}) => ({
    type: 'number'
}))`
    height: 30px;
    border-radius: 5px;
    border: none;
    margin-left: 5px;
    padding: 2px 6px;
`
