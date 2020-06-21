import React from "react";

const Publication = (props) => {
    return (
        <div className="publication-item">
            <a href={props.link} target="_blank" rel="noreferrer noopener">
                <img src={props.img} alt={`${props.title} cover page`} />
            </a>
            <div className="publication-info">
                <p>{props.title}</p>
                <p><em>{props.author}</em></p>
            </div>
        </div>
    )
}

export default Publication;
