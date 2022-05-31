
import './employees-list.css';
import EmployeesListItem from "../employees-list-item/employees-list-item";
import {AppProps} from "../../types";

const EmployeesList = (props:AppProps) => {

    const elements = props.data.map(element => {
        return(
            <EmployeesListItem
                    name={element.name}
                    salary={element.salary}
                    id={element.id}
                    key={element.id}
                    deletedData={props.deletedData}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;