import { FC, useState } from "react";
import profilePicture from "./assets/maxistahl.jpeg";
import './styles.scss';
import Confetti from "../confetti";

const Isay = ({ text }: { text: string }) => (
  <div className="message">
    <p>{text}</p>
    <svg width="293" height="65" viewBox="0 0 293 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0823 59.5124C22.5331 61.9786 27.6554 63.3827 33.1065 63.3827H258.061C302.424 63.3827 303.18 1.45679 258.061 1.45679H33.1065C15.9803 1.45679 2.09689 15.3194 2.09689 32.4198C2.09689 38.0593 3.60694 43.347 6.24539 47.9012C7.74958 50.4975 -0.0700159 61.3338 2.09685 63.3827C3.98584 65.1689 15.7902 58.2425 18.0823 59.5124Z" fill="white" stroke="currentcolor" stroke-width="2" stroke-linejoin="round" />
    </svg>
  </div>
);

const Profile: FC = () => {
  const [showAnim, setShowAnim] = useState(0);

  return (
    <div className="profile">
      <div className="avatar">
        {showAnim === 2 && <Isay text="Me gustaria trabajar en MeLi..." />}
        {showAnim === 3 && <Isay text="¿Me Ayudas?" />}
        <img src={profilePicture} alt="Maxi Stahl" />
      </div>
      <h1>Maximiliano Stahl</h1>
      <p>Dejame un like or dislike... ¡si podes!</p>
      <LikeDislikeButtons onClick={() => setShowAnim(showAnim + 1)} />
      {showAnim === 1 && <Confetti />}
    </div>
  );
};

type LikeDislikeButtonsProps = {
  onClick: () => void;
};

const LikeDislikeButtons: FC<LikeDislikeButtonsProps> = ({ onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let jump = {};

  if (position.x !== 0 && position.y !== 0) {
    jump = { transform: `translate(${position.x}px, ${position.y}px)` };
  }

  const handleClick = () => {
    onClick();
  };

  const handleMouseEnter = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = Math.random() * width;
    const y = Math.random() * height;

    setPosition({ x, y });
  };

  return (
    <div className="buttons-group">
      <button className="like" onClick={handleClick}>Like</button>
      <button
        className="dislike"
        onMouseEnter={handleMouseEnter}
        style={jump}
      >
        Dislike
      </button>
    </div>
  );
};

export default Profile;