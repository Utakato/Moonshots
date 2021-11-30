import "./style.css"
import * as actions from "../../actions/queryActions"
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react" 

const ColumnName = ({name, value}) => {
    const queryState = useSelector(state => state.query)
	const dispatch = useDispatch()
    
    const handleToggleClick = () => {
        let query = `${value}=-1`
        dispatch(actions.updateQuery(query))
    }
    let sort = false
    let sortDir = "fas fa-arrow-down"
    
    if (queryState.order.split("=")[0] == value) {
        sort = true
        if (queryState.order.split("=")[1] == "1" ) {
            sortDir = "fas fa-arrow-up"
        } else {
            sortDir = "fas fa-arrow-down"
        }
    }

    return (    
        <div className="column-name" onClick={handleToggleClick}>
            {name} {sort && <i class={sortDir}></i>}
            
        </div>
    )
}

export default ColumnName
