import React, { useEffect, useRef } from 'react'

const VideoCard = ({ src }) => {

    const videoRef = useRef()

    useEffect(() => {
        videoRef.current?.load()
    }, [src])

    return (
        <video autoPlay loop muted ref={videoRef}>
            <source src={src} type='video/mp4'></source>
        </video>
    )
}

export default VideoCard