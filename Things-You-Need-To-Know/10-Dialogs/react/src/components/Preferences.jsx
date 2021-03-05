import React, { useState } from 'react';

const Preferences = ({ dialog }) => {
  const [smartObject, setSmartObject] = useState(true);
  const [vectorContent, setVectorContent] = useState(false);
  return (
    <div className="column">
      <sp-heading size="S" style={{marginBottom: `20px`}}>Set Defaults</sp-heading>
      <div className="column" 
          style={{ border: `solid 1px #888`, borderRadius: `4px`, padding: `10px`, marginBottom: `30px` }}>
        <sp-checkbox checked={smartObject ? true : null} 
                     onInput={(evt) => setSmartObject(evt.target.checked) } >
          Smart Objects
        </sp-checkbox>
        <sp-checkbox checked={vectorContent ? true : null} 
                     onInput={(evt) => setVectorContent(evt.target.checked) }>
          Vector Content
        </sp-checkbox>
      </div>
      <div className="row" style={{justifyContent: `flex-end`}}>
        <sp-button variant="secondary" 
                   onClick={() => dialog.close("reasonCanceled")}>
          Cancel
        </sp-button>
        <sp-button variant="primary" style={{marginLeft: `10px`}} 
                   onClick={() => dialog.close({smartObject,vectorContent })}>
          Ok
        </sp-button>
      </div>
    </div>
  );
}

export default Preferences;