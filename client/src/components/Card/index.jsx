import "./style.css"

const Card = ({rank, symbol, name, price, mCap, watchlist, followers, link, twitter_link}) => {
    const newMcap = mCap.toLocaleString().toString().slice(0,-8)
    if (!followers) {
        followers = 0
    }

    const handleClick = () => {
        window.open(link, "_blank") // goes to CMC.com
    }

    const handleSiteClick = () => {
        window.open(twitter_link, "_blank") // this actually goes on the project's site. Not twitter account. TBF
    }
    
    return (
        <div className="card">
            <div className="stats rank"> # {rank} </div>
            <div className="stats symbol"> {symbol}</div>
            <div className="stats name clickable" onClick={handleSiteClick}>{name}</div>
            <div className="stats price">{(price > 1) ? price.toLocaleString(): price} $</div>
            <div className="stats market-cap">{newMcap}M $</div>
            <div className="stats watchlist clickable" onClick={handleClick}> {watchlist.toLocaleString()}</div>
            <div className="stats followers" >{followers.toLocaleString()}</div> 
        </div>
    )
}

export default Card
