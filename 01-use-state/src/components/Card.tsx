import '../assets/styles.css';
import verification from '../assets/images/check.png';
import { useState } from 'react';

const Card = () => {
  const[follow,setFollow] = useState(false);
  
  const handleFollow = () =>{
    setFollow(!follow)
  }
    return(
      <div className="card">
        <div className='card_avatar'>
          <img src="https://avatars.githubusercontent.com/u/78245005?v=4"/>
          <p className='card_description-tooltip'>Desarrollo web con propósito y pasión</p>
        </div>
        <div className='card_description'>
          <div className='card_description-name'>
            <p>Sally Candelaria</p>
            <img src={verification} alt='verification'/>
           
          </div>
          <p className='card_description-position'>Web Developer React</p>
        </div>
        <div className='card_follow'>
          <p>100</p>
          <p>120</p>
          <button className='card_follow_btn' onClick={handleFollow}>{ follow ? 'unfollow' : 'follow +'}</button>
        </div>
      </div>
    )
  }
  
  export default Card;