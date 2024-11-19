import {reducer, StateType} from "./Reducer";
import {
    CHANGE_ITEMS,
    CHANGE_MAX_PRICE,
    CHANGE_MAX_SIZE,
    CHANGE_MIN_PRICE,
    CHANGE_MIN_SIZE,
    CHANGE_VALUE,
    ItemType
} from "./App";
import {v1} from "uuid";


test('reducer should return empty items', () => {
    //data
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
    //actions
    const newState = reducer(initialState, {type: CHANGE_ITEMS, items: []})

    //expectations
    expect(newState.items.length).toBe(0)
})

test('reducer should return other max price', () => {
    //data
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
    //actions
    const newState = reducer(initialState, {type: CHANGE_MAX_PRICE, number: 1000})

    //expectations
    expect(newState.maxPrice).toBe(1000)
})

test('reducer should return other mix price', () => {
    //data
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
    //actions
    const newState = reducer(initialState, {type: CHANGE_MIN_PRICE, number: 1000})

    //expectations
    expect(newState.minPrice).toBe(1000)
})

test('reducer should return other max size', () => {
    //data
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
    //actions
    const newState = reducer(initialState, {type: CHANGE_MAX_SIZE, number: 1000})

    //expectations
    expect(newState.maxSize).toBe(1000)
})

test('reducer should return other min size', () => {
    //data
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
    //actions
    const newState = reducer(initialState, {type: CHANGE_MIN_SIZE, number: 1000})

    //expectations
    expect(newState.minSize).toBe(1000)
})