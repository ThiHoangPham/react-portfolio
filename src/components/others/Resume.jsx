import "./resume.scss"

export default function Resume() {

    const data = [
        {
            id: 1,
            name: "name 1",
            title: "Title 1",
            img:
                "https://media-exp1.licdn.com/dms/image/D5635AQGrW-y4LFi8fg/profile-framedphoto-shrink_200_200/0/1642492451698?e=1643176800&v=beta&t=k7V96Evikji0kzb9USWTVO2ewfwYDCJY6734SIwHtVo",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "name 2",
            title: "Title 2",
            img:
                "https://media-exp1.licdn.com/dms/image/D5635AQGrW-y4LFi8fg/profile-framedphoto-shrink_200_200/0/1642492451698?e=1643176800&v=beta&t=k7V96Evikji0kzb9USWTVO2ewfwYDCJY6734SIwHtVo",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "name 3",
            title: "Title 3",
            img:
                "https://media-exp1.licdn.com/dms/image/D5635AQGrW-y4LFi8fg/profile-framedphoto-shrink_200_200/0/1642492451698?e=1643176800&v=beta&t=k7V96Evikji0kzb9USWTVO2ewfwYDCJY6734SIwHtVo",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (
        <div className="resume" id="resume">
            <h1>Resume</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className="left" alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
