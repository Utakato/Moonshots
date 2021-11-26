import "./style.css"
import Card from "../Card"
import ColumnName from "../ColumnName"
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react" 
import * as actions from "../../actions/projectsActions"

const CardContainer = () => {
	const projectsState = useSelector(state => state.projects)
	const dispatch = useDispatch()

    useEffect(() => { dispatch(actions.getProjects())
	},[dispatch])
    return (
        <div className="card-container">
            <div className="column-container">
                <ColumnName name="Rank"/>
                <ColumnName name="Symbol"/>
                <ColumnName name="Name"/>
                <ColumnName name="Price"/>
                <ColumnName name="M. Cap"/>
                <ColumnName name="Watchlist"/>
                <ColumnName name="Followers"/>
            </div>
            {projectsState.map(project => {
                return <Card 
                            rank={project.rank} 
                            symbol={project.symbol}
                            name={project.name}
                            price={project.price}
                            mCap={project.market_cap}
                            watchlist={project.watchlist}
                            followers={project.twitter_followers}
                            link={project.link}
                            twitter_link={project.twitter_link}
                            />
            })}
            
                    </div>
    )
}

export default CardContainer
