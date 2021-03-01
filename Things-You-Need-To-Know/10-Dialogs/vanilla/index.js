const uxp = require("uxp");
document.getElementById("info").innerHTML = `Photoshop ${uxp.host.version}, ${uxp.versions.uxp}`

const openDialog = async () => {
	const res = await document.querySelector("#dialog").uxpShowModal({
		title: "About",
		resize: "both",
		size: {
			width: 464,
			height: 380
		}
	})
	console.log(`The dialog closed with: ${res}`)
}

const openSpectrumDialog = () => {
	console.log(document.querySelector("#sp-dialog"))

	document.querySelector("#sp-dialog").setAttribute("open");

	// document.querySelector("#sp-dialog").uxpShowModal({
  //   title: "About",
  //   resize: "both",
  //   size: {
  //     width: 620,
  //     height: 600
  //   }
  // });

}
