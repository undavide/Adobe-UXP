const app = window.require("photoshop").app;

// T-Shirt Color dropdown
document.querySelector("#color").addEventListener("change", evt => {
		document.querySelector("#shirt-img").src = `img/${evt.target.value}-shirt.jpg`
})

// Buy button
document.querySelector("#buy").addEventListener("click", evt => {
    let color = document.querySelector("#color").value;
    if (!color) {
			app.showAlert("Please pick a T-Shirt color");
      return;
    }
    let order = document.querySelector("#order").value;
		let message = document.querySelector("#message").value;
    var selectedSize = [...document.querySelectorAll('#size sp-radio')].filter(radio => radio.checked)[0].value;
    app.showAlert("T-Shirt order" +
		"\n--------------" +
		"\nNumber: " + order +
		"\nSize: " + selectedSize +
	  "\nColor: " + color +
		"\nMessage: " + (message === "" ? "none" : message))
})
