import React, {ChangeEvent, useReducer} from 'react';
import styled from "styled-components";
import {Item} from "./components/item/Item";
import {v1} from "uuid";
import {Selector} from "./components/selector/Selector";
import {reducer, StateType} from "./Reducer";

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

export const CHANGE_ITEMS = 'CHANGE-ITEMS'
export const CHANGE_VALUE = 'CHANGE-VALUE'
export const CHANGE_MIN_PRICE = 'CHANGE-MIN-PRICE'
export const CHANGE_MAX_PRICE = 'CHANGE-MAX-PRICE'
export const CHANGE_MIN_SIZE = 'CHANGE-MIN-SIZE'
export const CHANGE_MAX_SIZE = 'CHANGE-MAX-SIZE'

const initialState: StateType = {
    items: [
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
    ],
    value: '0',
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const ColorsValues: ColorType[] = [
        {value: '0', color: 'all'},
        {value: '1', color: 'red'},
        {value: '2', color: 'yellow'},
        {value: '3', color: 'white'},
        {value: '4', color: 'black'},
        {value: '5', color: 'green'},
    ]

    let filteredItems = state.items

    const onMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: CHANGE_MIN_PRICE, number: Number(event.currentTarget.value)})
    }

    const onMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: CHANGE_MAX_PRICE, number: Number(event.currentTarget.value)})
        debugger
    }

    const onMinSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: CHANGE_MIN_SIZE, number: Number(event.currentTarget.value)})
    }

    const onMaxSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: CHANGE_MAX_SIZE, number: Number(event.currentTarget.value)})
    }

    if (state.minPrice > 0) filteredItems = filteredItems.filter(item => item.price >= state.minPrice)
    if (state.maxPrice > 0) filteredItems = filteredItems.filter(item => item.price <= state.maxPrice)
    if (state.minSize > 0) filteredItems = filteredItems.filter(item => item.size >= state.minSize)
    if (state.maxSize > 0) filteredItems = filteredItems.filter(item => item.size <= state.maxSize)
    const selectedValue = ColorsValues.find(item => item.value === state.value)
    if (state.value !== '0' && selectedValue) filteredItems = filteredItems.filter(item => item.color === selectedValue.color)

    return (
        <StyledApp>
            <StyledFilter>
                <Selector value={state.value} items={ColorsValues}
                          onChange={(value: string) => dispatch({type: CHANGE_VALUE, value})}/>
                <FilterBlock>
                    <p>Цена:</p>
                    <StyledInput placeholder={'От:'} value={state.minPrice} onChange={onMinPriceChange}/>
                    <StyledInput placeholder={'До:'} value={state.maxPrice} onChange={onMaxPriceChange}/>
                </FilterBlock>
                <FilterBlock>
                    <p>Размер:</p>
                    <StyledInput placeholder={'От:'} value={state.minSize} onChange={onMinSizeChange}/>
                    <StyledInput placeholder={'До:'} value={state.maxSize} onChange={onMaxSizeChange}/>
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
