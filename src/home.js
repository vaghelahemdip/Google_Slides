import React, { useEffect } from "react";
import { useState } from 'react';
import './home.css';
import './logoutbtn.css';
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from 'react-filerobot-image-editor';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import chondrocytesBlud from './images/chondrocytes-blud.png';
import chondrocytesBlud2 from './images/chondrocytes-blud-2.png';
import chondrocytesOrange from './images/chondrocytes-orange.png';
import chondrocytesYellow from './images/chondrocytes-yellow.png';

import adipocyte from './images/adipocyte.png';
import adipocyte2 from './images/adipocyte2.png';
import adipocyte3 from './images/adipocyte3.png';
import adipocyte4 from './images/adipocyte4.png';

import myocytes from './images/myocytes.png';
import myocytes2 from './images/myocytes2.png';
import myocytes3 from './images/myocytes3.png';
import myocytes4 from './images/myocytes4.png';


export default function Home() {
  const [users, updateUser] = useState([]);
  const navigate = useNavigate();
  const adf = "sdf";

  // React.useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  
  function logOut() {
    localStorage.removeItem('email');
    navigate("/login");
  }

  return (
    <div className="demo">
      <div className="row">
      <button className="col addSlideButton"> Add Slide <span className="fa fa-plus-circle"></span></button>
      <button className="col topLabel">Ready to use illustration template</button>
      <button className="col topLabel">Ready to use poster template</button>
      <button className="col topLabel">Frequently used arrow/shapes</button>
      <button className="col topLabel">GIF images</button>
      <button className="col topLabel"> Meetings <span className="fa fa-window-restore"></span></button>

      <button className="col logoutbtn" type="button" onClick={logOut}>logout</button>
      </div>
        <div className="container">
        <div className="row cnt">
          <div className="col cpmImageList">
            <input className="searchInput" placeholder="Search Shape"></input>
            <div className="imageListItem">
            <img
              className="imsgeLst"
              src={chondrocytesBlud2}
              draggable="true"
              onDragStart={(event) => event.dataTransfer.setData("text/plain", event.target.src)}
            />
              <img className="imsgeLst" src={chondrocytesBlud2}></img>
              <img className="imsgeLst" src={chondrocytesOrange}></img>
              <img className="imsgeLst" src={chondrocytesYellow}></img>
              <img className="imsgeLst" src={adipocyte}></img>
              <img className="imsgeLst" src={adipocyte2}></img>
              <img className="imsgeLst" src={adipocyte3}></img>
              <img className="imsgeLst" src={adipocyte4}></img>
              <img className="imsgeLst" src={myocytes}></img>
              <img className="imsgeLst" src={myocytes2}></img>
              <img className="imsgeLst" src={myocytes3}></img>
              <img className="imsgeLst" src={myocytes4}></img>
          

            </div>
          </div>
          <div className="col">
            <FilerobotImageEditor
              source="https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg"
              onSave={(editedImageObject, designState) =>
                // alert("dfgfdg")
                console.log('saved', editedImageObject, designState)
              }
              Text={{ text: 'Text...' }}
              defaultTabId={TABS.ANNOTATE}
              defaultToolId={TOOLS.TEXT}
            />
          </div>
          <div className="col">
            Saved image will display here
            </div>
        </div>
        </div>
      </div>
  );
}
