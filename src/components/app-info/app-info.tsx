import React from "react";
import './app-info.css'
import {DataTypeElement} from "../../types";

interface AppInfoProps {
    data: DataTypeElement[]
}

const AppInfo = (props: AppInfoProps) => {
    let workers = props.data.length
    let increaseWorkers = (props.data.filter(item => item.increase)).length

    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {workers}</h2>
            <h2>Премию получат: {increaseWorkers}</h2>
        </div>
    )
}

export default AppInfo