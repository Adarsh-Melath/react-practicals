//problem
//Color Picker: Create a color picker using useState to change the background color of a div based on the user's color selection.

import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState('');
    return (
        <div>
            <div style={{ height: '300px', width: '300px', border: '2px solid black', background: `${color}` }}></ div>
            <select name="" id="" defaultValue={'orange'} onChange={(e) => setColor(e.target.value)}>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>
            </select>
        </div>
    )
}

export default ColorPicker