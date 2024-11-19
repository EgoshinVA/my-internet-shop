import {
    CHANGE_ITEMS,
    CHANGE_MAX_PRICE,
    CHANGE_MAX_SIZE,
    CHANGE_MIN_PRICE,
    CHANGE_MIN_SIZE,
    CHANGE_VALUE,
    ItemType
} from "./App";

export type StateType = {
    items: ItemType[],
    value: string
    minPrice: number
    maxPrice: number
    minSize: number
    maxSize: number
}
type ChangeItemsAction = {
    type: 'CHANGE-ITEMS'
    items: ItemType[]
}
type ChangeValueAction = {
    type: 'CHANGE-VALUE'
    value: string
}
type ChangeNumberAction = {
    type: 'CHANGE-MIN-PRICE' | 'CHANGE-MAX-PRICE' | 'CHANGE-MIN-SIZE' | 'CHANGE-MAX-SIZE'
    number: number
}
type ActionType = ChangeItemsAction | ChangeValueAction | ChangeNumberAction
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case CHANGE_ITEMS:
            return {...state, items: action.items}
        case CHANGE_VALUE:
            return {...state, value: action.value}
        case CHANGE_MIN_PRICE:
            return {...state, minPrice: action.number}
        case CHANGE_MAX_PRICE:
            return {...state, maxPrice: action.number}
        case CHANGE_MIN_SIZE:
            return {...state, minSize: action.number}
        case CHANGE_MAX_SIZE:
            return {...state, maxSize: action.number}
        default:
            throw new Error('Bad action type')
    }
}