import React from "react"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player'
// const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
import video from '../videos/car.mp4'


const VideoModal = ({ open, setOpen }) => {
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <Modal open={open} onClose={onCloseModal} classNames={{modal: 'playModal'}} center>
                <div className="w-100 ">
                    <ReactPlayer url={video} controls={true}/>
                </div>
            </Modal>
        </div>
    );
};

export default VideoModal