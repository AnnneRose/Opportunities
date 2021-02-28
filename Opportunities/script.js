function makeDocument() {
	let frame = document.getElementById("theFrame");

	let doc = document.implementation.createHTMLDocument("New Document");
	let p = doc.createElement("p");
	p.textContent = "This is a new paragraph.";

	try {
		doc.body.appendChild(p);
	} catch (e) {
		console.log(e);
	}

	// Copy the new HTML document into the framep

	let destDocument = frame.contentDocument;
	let srcNode = doc.documentElement;
	let newNode = destDocument.importNode(srcNode, true);

	destDocument.replaceChild(newNode, destDocument.documentElement);
}
async function onSubmit() {
	let name = document.getElementById("fname").value
	let location = document.getElementById("lname").value
	let category = document.getElementById("email").value
	let link = document.getElementById("age").value

	let payload = {}
	payload[name] = {
		name: name,
		location: location,
		category: category,
		link: link
	}

	await fetch("https://db.neelr.dev/api/6912ef27259834e665455b74d2f5ae43", {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	});
	window.location.reload()
}