import React, { useEffect } from "react";
import { useState } from 'react';
import './home.css';
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from 'react-filerobot-image-editor';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [users, updateUser] = useState([]);
  const navigate = useNavigate();

  function logOut()
  {
    localStorage.removeItem('email');
    navigate("/login");
  }
  return (
    <div class="demo">
      {/* <button onClick={openImgEditor}>Open Filerobot image editor</button> */}
      {/* <button type="button" onClick={logOut}>Log out</button> */}
        <FilerobotImageEditor
          source="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-black-paper-plane-border-image_2244062.jpg"
          onSave={(editedImageObject, designState) =>
            console.log('saved', editedImageObject, designState)
          }
          // onClose={closeImgEditor}
          // annotationsCommon={{
          //   fill: '#ff0000',
          // }}
          Text={{ text: 'Filerobot...' }}
          Rotate={{ angle: 90, componentType: 'slider' }}
          Crop={{
            presetsItems: [
              {
                titleKey: 'classicTv',
                descriptionKey: '4:3',
                ratio: 4 / 3,
                // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
              },
              {
                titleKey: 'cinemascope',
                descriptionKey: '21:9',
                ratio: 21 / 9,
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
              },
            ],
            presetsFolders: [
              {
                titleKey: 'socialMedia', // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                groups: [
                  {
                    titleKey: 'facebook',
                    items: [
                      {
                        titleKey: 'profile',
                        width: 180,
                        height: 180,
                        descriptionKey: 'fbProfileSize',
                      },
                      {
                        titleKey: 'coverPhoto',
                        width: 820,
                        height: 312,
                        descriptionKey: 'fbCoverPhotoSize',
                      },
                    ],
                  },
                ],
              },
            ],
          }}
          tabsIds={[TABS.ADJUST, TABS.ANNOTATE, TABS.WATERMARK]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ANNOTATE} // or 'Annotate'
          defaultToolId={TOOLS.TEXT} // or 'Text'
        />
    </div>
  );
}