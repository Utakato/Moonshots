import "./style.css"

const Card = ({rank, symbol, name, price, mCap, watchlist, followers, link, twitter_link}) => {
    return (
        <div className="card">
            <div className="stats rank"> # {rank} </div>
            <div className="stats symbol"> {symbol}</div>
            <div className="stats name">{name}</div>
            <div className="stats price">{price} $</div>
            <div className="stats market-cap">{mCap} $</div>
            <div className="stats watchlist">{watchlist}</div>
            <div className="stats followers">{followers}</div>
        </div>
    )
}

export default Card
