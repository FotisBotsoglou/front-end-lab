import './App.css'
import React, {useState,useEffect} from 'react'

const App: React.FC = () => {
    const[mousePosition, setMousePosition] = useState({x:0,y:0});
    useEffect(()=>{
        const handleMouseMove = (event: MouseEvent)=>{
            setMousePosition({x:event.clientX,y:event.clientY});
        }
        window.addEventListener('mousemove', handleMouseMove);
    },[]);
    return (
        <div className="container">
            <h2>Mouse Position</h2>
            <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
        </div>
    )
}

export default App
