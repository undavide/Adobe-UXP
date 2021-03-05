const uxp = require("uxp");
document.getElementById("info").innerHTML = 
`Photoshop ${uxp.host.version}, ${uxp.versions.uxp}`

const openDialog = async () => {
	const res = await document.querySelector("#dialog").uxpShowModal({
		title: "About",
		resize: "both", // "horizontal", "vertical", "none"
		size: {
			width: 464,
			height: 380
		}
	})
	console.log(`The dialog closed with: ${res}`)
}

const openSpectrumDialog = () => {
	document.querySelector("#sp-dialog").setAttribute("open");
}
