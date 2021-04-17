const photoshop = require('photoshop')
const { entrypoints } = require('uxp');

// const entrypoints = require('uxp').entrypoints
entrypoints.setup({
	plugin: {
		// NOT WORKING YET
		create(plugin) { console.log("Plugin created")},
		// NOT WORKING YET
		destroy(plugin) { console.log("Plugin destroyed")},
	},
	panels: {
		vanilla: {
			// NOT WORKING YET
			create() { console.log("Panel created") },
			// called when panel is made visible
      show(event) {
				console.log("Panel shown")
        // receives an event of type "uxpshowpanel"
        // with a event.node === body
        // to which you can .appendChild() stuff from create()
        console.log(event.type)
			},
			// NOT WORKING YET
      hide(event) { console.log("Panel hidden") },
			// NOT WORKING YET
      destroy() { console.log("Panel destroyed") },

			// called when a flyout menu item is selected
			invokeMenu(id) {

				console.log("Clicked menu with ID", id);
				// Storing the menu items array
				const { menuItems } = entrypoints.getPanel("vanilla");

				switch (id) {
					case "enabler":
            
						menuItems.getItem("dynamite").enabled = !menuItems.getItem("dynamite").enabled;
						
            menuItems.getItem(id).label = menuItems.getItem(id).label == "Enable  🧨" ? "Disable  🧨" : "Enable  🧨";
						break;
					case "toggle":
						menuItems.getItem(id).checked = !menuItems.getItem(id).checked
						break;
					case "reload":
						window.location.reload()
						break;
					case "about":
						showAbout()
						break;
				}

			},
      menuItems: [
				// by default all items are enabled and unchecked
				{
					label: "Preferences", submenu:
					[
						{id: "bell", label: "🔔  Notifications"},
						{id: "dynamite", label: "🧨  Self-destruct", enabled: false },
						{id: "spacer", label: "-" }, // SPACER
						{id: "enabler", label: "Enable  🧨" },
					]
				},
				{id: "toggle", label: "Toggle me!", checked: true },
				{id: "about", label: "About" },
				{id: "reload", label: "Reload this panel" },
			]
		}
	},
	commands: [] // Array of Objects (see Episode #4)
})

const showAbout = () => {
	photoshop.core.showAlert("Hello everyone 🧢\n\nThis could also be a dialog...\nSee Episode #10")
}
