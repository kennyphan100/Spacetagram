import background_video from './../Video/background_video.mp4';

const Background = () => {
    return (
        <div className="background_video">
            <video autoPlay muted loop id="myVideo">
            <source src={background_video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Background
