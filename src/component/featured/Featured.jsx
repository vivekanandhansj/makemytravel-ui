import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/max500/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>
                Banglore
            </h1>
            <h2>533 properties</h2>
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/max500/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>
              Mumbai
            </h1>
            <h2>532 properties</h2>
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/max500/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
            <h1>
              New Delhi
            </h1>
            <h2>2912 properties</h2>
        </div>
        </div>
    </div>
  )
}

export default Featured