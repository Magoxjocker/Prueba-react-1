import React from 'react'


const Section = ({reverse, img, text}) => {
    return (
        <section className={`section ${reverse ? 'section-reverse' : ''}`}>
            <img src={img} alt="" />
            <p>{text}</p>
        </section>
    )
}

export default Section