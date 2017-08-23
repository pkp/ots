
function OTSXMLStore() {
	this.readXML = function(documentId, cb) {
		fetch(documentId, {
			  credentials: 'same-origin'
		})
		.then(function(response){
			response.text().then(function(xml) {
				cb(null, xml);
			});
		})
	};
	
	this.writeXML = function(documentId, xml, cb) {
		fetch(documentId, {
			credentials: 'same-origin',
			method: 'POST',
			body: JSON.stringify({
				'content': xml
			})
		})
		.then(function(response) {
			if(response.status !== 200) {
				alert('Unable to save document due to an unexpected error. Please try again.');
			}
		});
	};
}