import React from 'react';
import Slider from '../../component/slider/Slider';
import './about.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className='about_me'>
        <h1>About Me</h1>
        </div>
      <div className="slider-container">
        <Slider 
          images={[
            "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/bd39862d8902e0497c4a41833b523a70.jpg",
            "https://www.shutterstock.com/image-photo/kolkata-india-november-26-rural-260nw-523831210.jpg",
            "https://sundayguardianlive.com/wp-content/uploads/2019/11/India-Craft-Week-image-6-copy.jpg",            
            "https://www.shutterstock.com/shutterstock/videos/1058425891/thumb/1.jpg?ip=x480"
          ]}
        />
      </div>
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis quae optio exnatur optio veritatis veniam eos minus debitis dolorum quo tempore! Repudiandae ratione repellat dolorum a alias fugit quod distinctio eligendi aliquid error.
          Mollitia quia iusto libero iste id tempore eligendi, officia in deleniti dicta eum nostrum molestiae omnis distinctio, laboriosam excepturi corrupti sed asperiores veniam ratione! Deleniti hic expedita quam tempora reiciendis?
        </p>
      </div>
    </div>
  );
};

export default About;
