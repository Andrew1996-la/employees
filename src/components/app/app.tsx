import './app.css'
import React from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import {DataTypeElement} from "../../types";
import {fdatasync} from "fs";


interface AppState {
    data: DataTypeElement[]
}

class App extends React.Component<{ }, AppState>{
    constructor(props: { }) {
        super(props);
        this.state = {
            data: [
                {name: 'Andrew', salary: 3500, increase: false, id:1},
                {name: 'Sara',  salary: 2000, increase: false, id:2},
                {name: 'Pete', salary: 1000, increase: false, id:3},
            ],
        }
    }
    generatorID = () => {
        return new Date().getMilliseconds() * Math.random();
    }

    deletedData = (id: number): void => {
        this.setState(prevData => ({
            data: prevData.data.filter(item => item.id !== id)
        }))
    }

    addNewItem = (name:string, salary:string) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.generatorID()
        }
        this.setState(({data}): object => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return(
            <div className='app'>
                <AppInfo/>

                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    deletedData={this.deletedData}
                />
                <EmployeesAddForm
                    data={this.state.data}
                    addNewItem={this.addNewItem}
                />
            </div>
        )

    }

}

export default App