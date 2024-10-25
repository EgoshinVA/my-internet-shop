import React, {ChangeEvent, useState} from 'react';
import styled from "styled-components";
import {Item} from "./components/item/Item";
import {v1} from "uuid";
import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select} from "@mui/material";

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

    const [currentColors, setCurrentColors] = useState<string[]>([])

    const [minPrice, setMinPrice] = useState<number>()

    const [maxPrice, setMaxPrice] = useState<number>()

    if (minPrice === 0) setMinPrice(undefined)

    if (maxPrice === 0) setMaxPrice(undefined)

    let filteredItems = items

    const onMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.currentTarget.value))
        if (minPrice) setItems(filteredItems.filter(item => item.price > minPrice))
    }

    const onMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.currentTarget.value))
    }

    const colors = ["white", "black", "grey", "brown", "blue", "red", "green", "yellow"]

    const handleChange = (event: any) => {
        setCurrentColors(event.target.value)
    };

    if (currentColors.length > 0) filteredItems = items.filter(item => currentColors.includes(item.color))

    return (
        <StyledApp>
            <StyledFilter>
                <FormControl sx={{m: 1, width: 300}}>
                    <InputLabel>Tag</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={currentColors}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag"/>}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {colors.map((color) => (
                            <MenuItem key={color} value={color}>
                                <Checkbox checked={currentColors.indexOf(color) > -1}/>
                                <ListItemText primary={color}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <p>Цена:</p>
                <StyledInput placeholder={'От:'} value={minPrice} onChange={onMinPriceChange}/>
                <StyledInput placeholder={'До:'} value={maxPrice} onChange={onMaxPriceChange}/>
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

const StyledInput = styled.input.attrs(({type}) => ({
    type: 'number'
}))`
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-left: 5px;
  padding: 2px;
`
