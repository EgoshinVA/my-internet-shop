import React, {useEffect, useState} from 'react';
import {ColorType} from "../../App";
import styles from './Selector.module.css'

type SelectorPropsType = {
    value: string
    items: ColorType[]
    onChange: (value: string) => void
}

export const Selector: React.FC<SelectorPropsType> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hovered, setHovered] = useState<string>(props.value);

    const selectedValue = props.items.find(el => el.value === props.value)
    const hoveredValue = props.items.find(el => el.value === hovered)

    useEffect(() => {
        setHovered(props.value);
    }, [props.value])

    const onClickToggle = () => {
        setIsOpen(!isOpen);
    }

    const changeValue = (value: string) => {
        props.onChange(value);
        setIsOpen(false);
    }

    const onSelectorBlur = () => setIsOpen(false);

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hovered && e.key === 'ArrowDown' && props.items[i + 1]) {
                props.onChange(props.items[i + 1].value);
                break;
            }
            if (props.items[i].value === hovered && e.key === 'ArrowUp' && props.items[i - 1]) {
                props.onChange(props.items[i - 1].value);
                break;
            }
        }
        e.key === 'Escape' && setIsOpen(false);
        e.key === 'Enter' && setIsOpen(!isOpen);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp')
            !props.value && props.onChange(props.items[0].value);
    }

    return (
        <div>
            <div className={styles.selector} onBlur={onSelectorBlur} tabIndex={0} onKeyDown={onKeyDown}>
                <span onClick={onClickToggle} className={styles.title}>{selectedValue?.color}</span>
                {isOpen && <div className={styles.itemsBlock}>
                    {props.items.map(item => <div
                        className={hoveredValue?.value === item.value ? styles.selectedItem : styles.item}
                        onClick={() => changeValue(item.value)}
                        key={item.value}
                        onMouseEnter={() => setHovered(item.value)}
                        >{item.color}</div>
                    )}
                </div>
                }
            </div>
        </div>
    );
};