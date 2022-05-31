import './employees-add-form.css'
import React from "react";
import {DataTypeElement} from "../../types";

interface EmployeesAddFormState {
    name: string
    salary: string
}

interface EmployeesAddFormProps {
    addNewItem: (name:string, salary:string) => void
    data: DataTypeElement[]
}

class EmployeesAddForm extends React.Component<EmployeesAddFormProps, EmployeesAddFormState>{
    constructor(props: EmployeesAddFormProps) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onChangeValueName = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeValueSalary = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            salary: e.target.value
        })
    }

    handleAddWorker = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.addNewItem(this.state.name, this.state.salary)

    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           value={this.state.name}
                           onChange={this.onChangeValueName}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           value={this.state.salary}
                           onChange={this.onChangeValueSalary}/>

                    <button type="submit"
                            onClick={this.handleAddWorker}
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default  EmployeesAddForm