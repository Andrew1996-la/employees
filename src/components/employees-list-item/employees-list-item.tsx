import './employees-list-item.css'
import React from "react";

interface EmployeesListItemProps{
    name: string
    salary: number
    id: number
    key: number
    increase: boolean
    rise: boolean
    deletedData: (id: number) => void
    increaseWorker: (id: number) => void
    riseWorker: (id: number) => void
}

interface EmployeesListItemState {
    increase: boolean
    upgrade: boolean
}

class EmployeesListItem extends React.Component<EmployeesListItemProps, EmployeesListItemState>{
    constructor(props: EmployeesListItemProps) {
        super(props);
    }

    handleIncrease = ():void => {
        this.props.increaseWorker(this.props.id)
    }

    handleUpgrade = ():void => {
        this.props.riseWorker(this.props.id)
    }

    handleDeleteData = () => {
        this.props.deletedData(this.props.id)
    }

    render() {
        let classStyle: string = 'list-group-item d-flex justify-content-between'

        if (this.props.increase) {
            classStyle += ' increase'
        }

        if (this.props.rise) {
            classStyle += ' like'
        }

        return (
            <li className={classStyle}>
                <span onClick={this.handleUpgrade} className="list-group-item-label">{this.props.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={this.props.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={this.handleIncrease}
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={this.handleDeleteData}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem