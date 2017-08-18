var t = window.texture;

if (typeof window !== 'undefined') {
	window.onload = function() {
		var xmlStore = new OTSXMLStore()
		var app = t.Texture.mount({
			readXML: xmlStore.readXML,
			writeXML: xmlStore.writeXML,
			documentId: document.querySelector('meta[name=jobId').getAttribute('content')
		}, document.body)
		window.app = app
	}
}