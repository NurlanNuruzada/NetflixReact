import React from 'react'
import "./Enjoy.scss";

const Enjoy = (props) => {
    return (
        <>
            <div className='EnjoyMain'>
                <div className='EnjoyMain_in'>
                    <div style={{ order: props.order }} className='EnjoyMain_Title'>
                        <div>
                            <h1 className='Title_Name'>{props.title}</h1>
                            <h2 className='Title_Decs'>{props.titleDesc}</h2>
                        </div>
                    </div>
                    <div className='EnjoyMain_Image'>
                        <div className='Image_Img'>
                            <img src={props.image} />
                        </div>
                        <div className='Image_Video'>
                            <video style={props.sonStyle == true ? {} : { width: '66%', marginLeft: '120px', marginTop: '50px' }} src={props.video}></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enjoy;