import React, {useState} from 'react'

export default function About(props) {
    let myStyle = { 
        color: props.mode === "dark" ? "white" : "#262121",
        backgroundColor: props.mode === "dark" ? "#262121" : "white"
    }

  return (
    <div className="container" style={{color: props.mode === "dark" ? "white" : "#262121"}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong> Analyze Your Text </strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze your text quickly and effiently. Be it word count, character count or preview.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports a number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, Blog, Books, Excel document, PDF document, Essays etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
