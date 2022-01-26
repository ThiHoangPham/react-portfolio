import { useState } from 'react'
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form target="_blank" action="https://formsubmit.co/thaihoangpham2008@gmail.com" method="POST">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                    <textarea placeholder="Your Message" className='textarea' name="message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
