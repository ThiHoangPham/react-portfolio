import "./resume.scss"

export default function Resume() {

    const data = [
        {
            id: 1,
            name: "Technical skills.",
            title: "Full Stack Developer.",
            img:
                "assets/man2.png",
            rightIcon: "assets/facebook.png",
            rightSrc: "https://www.facebook.com/adamthaihoang/",
            leftIcon: "assets/twitter.png",
            leftSrc: "https://twitter.com/AdamThaiHoang1",
            firstDesc:
                "FROND-END: HTML5. CSS3. SASS. JAVASCRIPT. REACT. GITHUB. HEROKU. BOOTSTRAP",
            secondDesc:
                "BACK-END: JAVASCRIPT. NODEJS. MONGODB. MYSQL. NPM. ",
        },
        {
            id: 2,
            name: "About me.",
            title: "I am Adam.",
            img:
                "assets/man1.png",
            rightIcon: "assets/github.png",
            rightSrc: "https://github.com/ThiHoangPham",
            leftIcon: "assets/stackoverflow.png",
            leftSrc: "https://stackoverflow.com/users/16582425/adam-thai-hoang",
            firstDesc:
                "...Having almost six years working in Supermarkets Industry, I am taking the opportunity to start learning IT skills again...",
            secondDesc:
                "...It gonna be a brand new page of my life. Challenge, Difficult, but will be Successful...",
            featured: true,
        },
        {
            id: 3,
            name: "My Resume.",
            title: "Download here.",
            img:
                "assets/man3.png",
            rightIcon: "assets/linkedin.png",
            rightSrc: "https://www.linkedin.com/in/thaihoangpham/",
            leftIcon: "assets/indeed.png",
            leftSrc: "https://my.indeed.com/p/phamt-jdbzpw2",
            resumeSrc: "assets/resume-updated-2.0.pdf",
            firstDesc:
                "UWA CODING BOOTCAMP(2021-2022): Full Stack Developer.",
            secondDesc:
                "UDEMY(2021-2022): Modern Javascript.",
        },
    ];

    return (
        <div className="resume" id="resume">
            <h1>Resume</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <a href={d.leftSrc} target="_blank"><img src={d.leftIcon} className="left" /></a>
                            <img className="user" src={d.img} alt="" />
                            <a href={d.rightSrc} target="_blank"><img className="right" src={d.rightIcon} /></a>
                        </div>
                        <div className="center">
                            {d.firstDesc}
                        </div>
                        <div className="center">
                            {d.secondDesc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <button><a href={d.resumeSrc} target="_blank">{d.title}</a></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
