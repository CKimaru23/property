import React from 'react';
import NavBar from '../components/NavBar';
import SlidingImageBanner from './SlidingImageBanner';
import Footer from './Footer';

function About(){
  return (
    <>
      <div>
        <h1 style={{textAlign:"center"}}>Property Management</h1>
        <SlidingImageBanner />
      </div>
      <br></br>
      <br></br>
      <div style={{backgroundColor: "#eeeee4", marginTop: "50px", padding: "30px, 0"}}>
        <h1 style={{textAlign:"center"}}>About the Property Management</h1>
      </div>
      <div style={{textItems:"center", margin: "30px 30px"}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor consequat lobortis. Morbi ac diam at nibh sodales laoreet. Cras id fringilla lacus. Integer dapibus at neque at facilisis. Fusce ultricies mattis tincidunt. Curabitur id convallis neque, ut mattis orci. Nulla nec felis ut eros eleifend bibendum. Maecenas lectus leo, viverra interdum euismod sed, imperdiet a nibh. Sed ac orci pretium, finibus velit id, venenatis nulla. Vestibulum porta vel tellus et varius. Vivamus id dignissim velit. In posuere velit nec hendrerit imperdiet. Praesent et egestas purus.</p>

        <p>Suspendisse iaculis eros eget leo fermentum, id euismod tortor iaculis. Nam metus massa, sodales sed arcu ornare, varius ornare nisl. Fusce sed cursus est. Maecenas gravida mi dui, tristique egestas sapien vehicula id. Nunc vel pharetra enim. Maecenas erat lacus, dictum aliquet pulvinar ut, mollis sit amet mi. Aenean eleifend ac libero in consectetur. Phasellus nec tortor ut metus malesuada posuere non vulputate dui. Vivamus mollis risus nec sem dapibus egestas. Nam luctus sed risus eu eleifend. Duis non congue dui. Quisque lobortis ligula turpis, et auctor dui faucibus at.</p>

        <p>Nulla in ipsum ante. Etiam enim sem, dignissim in aliquet vel, egestas dapibus lacus. Nulla lacinia hendrerit velit, tempor maximus ipsum suscipit quis. Nullam sit amet magna et lectus fringilla suscipit tristique in enim. Phasellus vehicula mauris lacus, consequat mollis turpis auctor vel. Donec interdum in magna quis semper. Aliquam sagittis commodo mauris, sit amet auctor massa pretium non. Nunc euismod sagittis interdum. Donec condimentum luctus fringilla. Integer nibh eros, tincidunt non finibus quis, malesuada id ipsum. Nulla tincidunt nisi mauris, ac porta ante condimentum nec. Quisque placerat, nunc eget hendrerit finibus, est metus volutpat turpis, sit amet molestie urna elit a odio. Nam luctus arcu elementum turpis tristique, egestas faucibus urna suscipit. Mauris porttitor, lectus in semper fringilla, dolor justo ultricies nulla, ut auctor enim augue in odio. Sed ut tincidunt tellus. Etiam feugiat dignissim tincidunt.</p>
      </div>
      
      <Footer />
      
    </>
  );
};

export default About;
