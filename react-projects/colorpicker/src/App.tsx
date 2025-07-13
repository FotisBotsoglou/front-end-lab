import './App.css'
import React, {useState} from 'react'



const App:React.FC=()=>{
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const colors = [
        "#FF0000", // Red
        "#00FF00", // Lime
        "#0000FF", // Blue
        "#FFFF00", // Yellow
        "#FF00FF", // Magenta
        "#00FFFF", // Cyan
        "#000000", // Black
        "#FFFFFF", // White
        "#FFA500", // Orange
        "#800080", // Purple
        "#008080", // Teal
        "#808000", // Olive
        "#A52A2A", // Brown
        "#FFC0CB", // Pink
        "#B0C4DE", // Light Steel Blue
        "#2F4F4F", // Dark Slate Gray
        "#F5F5DC", // Beige
        "#F0E68C", // Khaki
        "#D2691E", // Chocolate
        "#4B0082", // Indigo
    ];
    const  handleColorChange = (color: React.SetStateAction<string>) => {
        setBackgroundColor(color);
    }
    return (
        <div className="App" style={{backgroundColor}}>
            <h1 className="fixed-header">Color Picker</h1>
            <div className="color-pallete">

            {colors.map((color,index)=>(
                <div  key={index}
                        className= "color-box"
                        style={{backgroundColor:color}}
                        onClick={()=>handleColorChange(color)}>
                </div>
            ))}
                <div className="custom-color-picker">
                    <label>Custom Color</label>
                    <input type="color"
                                value={backgroundColor}
                                onChange={(e)=>setBackgroundColor(e.target.value)}    />
                </div>
            </div>
        </div>
    )
}

export default App
