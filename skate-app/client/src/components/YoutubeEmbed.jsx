import ReactPlayer from "react-player"


const YoutubeEmbed = (props) => {
    return (
        <div className="player-wrapper mt-5">
            <ReactPlayer
                className="react-player container-fluid"
                url={props.url}
                width="100%"
                height="100%"
                controls={true}
                />
        </div>
    )
}

export default YoutubeEmbed;
