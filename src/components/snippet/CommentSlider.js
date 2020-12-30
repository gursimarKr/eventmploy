import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

const CommentSlider = () => {
    return(
        <>
         <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
        </>
    )
}
export default CommentSlider