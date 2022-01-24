import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Consequuntur velit sunt error iure quia repellendus tenetur unde fugiat.</p>
                                <span>learn more...</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://i.pinimg.com/originals/f6/28/b7/f628b79ea9ba959fcd5196a21df95497.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
