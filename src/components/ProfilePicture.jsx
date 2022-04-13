import React from "react";
import Image from 'react-bootstrap/Image'

function ProfilePicture(props) {
    return <a href="https://www.linkedin.com/in/thetechpm/"><Image roundedCircle={true} className="profile-pic mt-2 mb-3" src="../../../%PUBLIC_URL%/media/profile-pic.jpg" alt="Jenny Hunter" /></a>;
}

export default ProfilePicture;