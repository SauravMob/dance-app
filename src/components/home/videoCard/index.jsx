import React, { useEffect, useRef } from 'react'

const VideoCard = ({ src }) => {

    return (
        <video autoPlay loop muted>
            <source src={src} type='video/mp4'></source>
        </video>
    )
}

export default VideoCard