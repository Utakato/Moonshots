import "./style.css"
import Card from "../Card"
import ColumnName from "../ColumnName"

const CardContainer = () => {
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
            
            <Card 
                rank="1"
                symbol="BTC"
                name="Bitcoin"
                price="62000"
                mCap="1,000,000,000,000"
                watchlist="50000"
                followers="25000"
            />
            <Card 
                rank="1"
                symbol="BTC"
                name="Bitcoin"
                price="62000"
                mCap="1,000,000,000,000"
                watchlist="50000"
                followers="25000"
            />
            <Card 
                rank="1"
                symbol="BTC"
                name="Bitcoin"
                price="62000"
                mCap="1,000,000,000,000"
                watchlist="50000"
                followers="25000"
            />
            <Card 
                rank="1"
                symbol="BTC"
                name="Bitcoin"
                price="62000"
                mCap="1,000,000,000,000"
                watchlist="50000"
                followers="25000"
            />
        </div>
    )
}

export default CardContainer
