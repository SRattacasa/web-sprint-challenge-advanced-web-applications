import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
useEffect(() => { 
  axiosWithAuth().get('/colors')
  .then(res => {setColorList(res.data)})
  .catch(err => {console.log(err)})
}, [])

// COPIED FROM MOVIE ASSIGNMENT, EDIT
const getColor = () => {
  axiosWithAuth()
    .get("/colors")
    .then(res => {setColorList(res.data)})
    .catch(err => console.log(err.response));
};

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColor={getColor} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
