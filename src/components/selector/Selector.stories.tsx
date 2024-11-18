import {Selector} from "./Selector";
import {useState} from "react";

export default {
    title: 'Selector'
}

const items = [
    {value: '1', color: 'red'},
    {value: '2', color: 'yellow'},
    {value: '3', color: 'white'},
    {value: '4', color: 'black'},
    {value: '5', color: 'green'}]

export const SelectorWithValue = () => {
    const [value, setValue] = useState<string>('1');

    return <Selector value={value} items={items} onChange={setValue}/>
}

export const SelectorWithoutValue = () => {
    const [value, setValue] = useState<string>('');

    return <Selector value={value} items={items} onChange={setValue}/>
}