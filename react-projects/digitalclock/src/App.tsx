import './App.css'
import React, {useEffect, useState} from 'react'
const App:React.FC = () => {
    const[time,setTime]=useState(new Date());
    const [locale, setLocale] = useState("el-GR");

    useEffect(()=>{

     const timerId =   setInterval(()=>setTime(new Date()),1000);
     return () => clearInterval(timerId);
    },[])

    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocale(e.target.value);
    };
    const formattedTime =time.toLocaleTimeString(locale,{hour:"2-digit",
                                                                                                                                minute:"2-digit",
                                                                                                                                second:"2-digit",});
    return (
        <div className="clock-container">
            <h1 className="title">🕒 Live Clock</h1>
            <select className="timezone-selector" value={locale} onChange={handleLocaleChange}>
                <option value="el-GR">🇬🇷 Greece</option>
                <option value="en-US">🇺🇸 USA</option>
                <option value="en-GB">🇬🇧 UK</option>
                <option value="ja-JP">🇯🇵 Japan</option>
                <option value="fr-FR">🇫🇷 France</option>
                <option value="de-DE">🇩🇪 Germany</option>
                <option value="zh-CN">🇨🇳 China</option>
            </select>
            <div className="time-display">{formattedTime}</div>
        </div>
    )
}

export default App
