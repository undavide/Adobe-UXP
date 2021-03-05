import React from "react";
import ReactDOM from 'react-dom'
import Preferences from "../components/Preferences"
import uxp from "uxp"

const Dialogs = () => {

  let preferencesDialog = null;

  const openPreferences = async () => {
    // Make it better, e.g. loading data from localStorage passing it to the
    // dialog, and saving it thereafter
    if (!preferencesDialog) {
      preferencesDialog = document.createElement("dialog");
      ReactDOM.render(<Preferences dialog={preferencesDialog} />, preferencesDialog);
    }
    document.body.appendChild(preferencesDialog);
    let result = await preferencesDialog.uxpShowModal({
      title: "Preferences",
      resize: "both",
      size: {
        width: 300,
        height: 250
      }
    });
    // Do whatever you need with the {smartObject, vectorContent} result
    console.log(result)
    preferencesDialog.remove();
  }
  return (
    <div>
      <sp-heading>Dialog example in React</sp-heading>
      <sp-divider size="large" style={{ marginBottom: `10px` }}></sp-divider>
      <sp-body>
        Some dummy Preferences dialog.<br />
        
      </sp-body>

      <div className="row" style={{ margin: `20px`, justifyContent: `space-around` }}>
        <sp-action-button onClick={openPreferences} width="160">
          <div slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18" style={{fill: `currentColor`}}>
              <rect width="18" height="18" opacity="0"/><path d="M8.5965,12.893H7.534a3.0709,3.0709,0,0,0-.45-1.0895l.7565-.7565a.3035.3035,0,0,0,0-.429l-.46-.46a.3035.3035,0,0,0-.429,0l-.7555.757a3.07263,3.07263,0,0,0-1.089-.45V9.4035A.3035.3035,0,0,0,4.8035,9.1h-.607a.3035.3035,0,0,0-.3035.3035V10.466a3.07263,3.07263,0,0,0-1.089.45l-.7565-.758a.3035.3035,0,0,0-.429,0l-.46.46a.3035.3035,0,0,0,0,.429l.7565.757a3.0709,3.0709,0,0,0-.45,1.0895H.4035A.3035.3035,0,0,0,.1,13.197h0v.607a.3035.3035,0,0,0,.3035.3035H1.466a3.0709,3.0709,0,0,0,.45,1.0895l-.758.756a.3035.3035,0,0,0,0,.429l.46.46a.3035.3035,0,0,0,.429,0l.757-.757a3.07263,3.07263,0,0,0,1.089.45v1.0625a.3035.3035,0,0,0,.3035.3035h.607a.3035.3035,0,0,0,.3035-.3035V16.534a3.07263,3.07263,0,0,0,1.089-.45l.7565.7565a.3035.3035,0,0,0,.429,0l.46-.46a.3035.3035,0,0,0,0-.429L7.085,15.196a3.0709,3.0709,0,0,0,.45-1.0895H8.5975a.3035.3035,0,0,0,.3035-.3035v-.6065a.3035.3035,0,0,0-.3035-.3035ZM4.5,15.082A1.582,1.582,0,1,1,6.082,13.5h0A1.582,1.582,0,0,1,4.5,15.082Z" />
              <path d="M17.681,7.453l-1.4-.5715a4.37836,4.37836,0,0,0-.006-1.6785l1.405-.591a.4325.4325,0,0,0,.231-.566l-.361-.8545a.432.432,0,0,0-.5655-.23121l-.0005.00021L15.5785,3.55A4.38056,4.38056,0,0,0,14.383,2.372l.5715-1.4a.4325.4325,0,0,0-.237-.5635l-.8-.3265a.4325.4325,0,0,0-.5635.237l-.5715,1.4a4.38055,4.38055,0,0,0-1.6785.006L10.512.322A.432.432,0,0,0,9.9465.09079L9.946.091,9.0915.45a.4325.4325,0,0,0-.231.566L9.45,2.4215a4.3765,4.3765,0,0,0-1.178,1.196l-1.4-.5715a.4325.4325,0,0,0-.5635.237l-.3265.8a.4325.4325,0,0,0,.237.5635l1.4.5715a4.37836,4.37836,0,0,0,.006,1.6785l-1.405.591a.4325.4325,0,0,0-.231.566l.3595.854a.432.432,0,0,0,.5655.23121l.0005-.00021,1.405-.591a4.38043,4.38043,0,0,0,1.196,1.178l-.5715,1.4a.4325.4325,0,0,0,.237.5635l.8.3265a.4325.4325,0,0,0,.5635-.237l.5715-1.4a4.37757,4.37757,0,0,0,1.6785-.006l.591,1.405a.432.432,0,0,0,.5655.23121l.0005-.00021.8545-.3595a.4325.4325,0,0,0,.231-.566L14.45,9.6785A4.37607,4.37607,0,0,0,15.628,8.483l1.4.5715a.432.432,0,0,0,.5633-.23652l.0002-.00048.3265-.8a.4325.4325,0,0,0-.23624-.56419Zm-5.731.691A2.094,2.094,0,1,1,14.044,6.05,2.094,2.094,0,0,1,11.95,8.144Z" />
            </svg>
          </div>
        Open Preferences</sp-action-button>
      </div>

      <sp-detail size="L">Photoshop {uxp.host.version}, {uxp.versions.uxp}</sp-detail>
    </div>
  );
}

export default Dialogs;