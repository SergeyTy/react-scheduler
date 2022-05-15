import * as React from 'react'
import { useMemo, useRef, useState } from "react";
import {useCombobox} from 'downshift'
import ItemData from "../data/ItemData"
// items = ['Neptunium', 'Plutonium', ...]

function DropdownCombobox() {
  const [inputItems, setInputItems] = useState(ItemData)
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({inputValue}) => {
      setInputItems(
        ItemData.filter(item =>
            item.item.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  return (
    <>
      <div {...getComboboxProps()}>
        <input {...getInputProps()} />
      </div>
      <ul >
        { inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
              }
              key={`${item.item}${index}`}
              {...getItemProps({item, index})}
            >
              {item.item}
            </li>
          ))}
      </ul>
    </>
  )
}

export default DropdownCombobox;