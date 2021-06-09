import React from 'react';
import '../App.css';
import './Rcard.css';

function Rcard() {
  
  return (
      <>
      <div className="container-fluid">
      <div class="row">
			<h1><b> Samples </b></h1>
         <br/>
			<h2 align="center"><b>[ Exan Papers & Report Cards ]</b></h2>
	  </div>
    <br/>
    <br/>
    <br/>
      <div id="slider">
   <input type="radio" name="slider" id="slide9" />
   <input type="radio" name="slider" id="slide10"/>
   <input type="radio" name="slider" id="slide11"/>
   <input type="radio" name="slider" id="slide12"/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_9">
               <div class="slide-content">
                  <p><b>1</b></p>
               </div>
            </div>
            <div class="slide slide_10">
               <div class="slide-content">
                  <p><b>2</b></p>
               </div>
            </div>
            <div class="slide slide_11">
               <div class="slide-content">
                  <p><b>3</b></p>
               </div>
            </div>
            <div class="slide slide_12">
               <div class="slide-content">
                  <p><b>4</b></p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide9"></label>
      <label for="slide10"></label>
      <label for="slide11"></label>
      <label for="slide12"></label>
   </div>
   <div id="bullets">
      <label for="slide9">  </label>
      <label for="slide10"></label>
      <label for="slide11"></label>
      <label for="slide12"></label>
   </div>
</div>
        </div>
      </>  

  );
}

export default Rcard;