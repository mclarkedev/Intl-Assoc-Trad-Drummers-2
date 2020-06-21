import React from "react";
import pdfIcon from "../../static/pdf.svg";

const DownloadablePDF = (props) => {
    return (
        <div className="downloadable-pdf">
            <a href={props.path} target="_blank" rel="noreferrer noopener">
                {props.title} <img src={pdfIcon} alt="Download" />
            </a>
        </div>
    )
}

export default DownloadablePDF;
