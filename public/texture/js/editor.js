(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('substance'), require('substance-texture')) :
	typeof define === 'function' && define.amd ? define(['substance', 'substance-texture'], factory) :
	(factory(global.window.substance,global.window.texture));
}(this, (function (substance,substanceTexture) { 'use strict';

	window.addEventListener('load', () => {
		substance.substanceGlobals.DEBUG_RENDERING = substance.platform.devtools;
		window.texture = OTSTextureEditor.mount({}, document.getElementById("editor"));
	});
	
	class OTSTextureEditor extends substance.Component {
		didMount() {
			this._init();
			substance.DefaultDOMElement.getBrowserWindow().on('keydown', this._keyDown, this);
		}
		
		dispose() {
			substance.DefaultDOMElement.getBrowserWindow().off(this);
		}
		
		getInitialState() {
			return {
				archive: undefined,
				error: undefined
			}
		}
		
		_init() {
			let storageUrl = document.querySelector('meta[name=jobId').getAttribute('content');
			let storage = new substance.HttpStorageClient(storageUrl);
			let buffer = new substance.InMemoryDarBuffer();
			let archive = new substanceTexture.TextureArchive(storage, buffer);
			window.archive = archive;
			window.buffer = buffer;

			let promise = archive.load('')
			.then(() => {
				setTimeout(() => {
					this.setState({archive});
				}, 0);
			});

			if (!substance.platform.devtools) {
				promise.catch(error => {
					console.error(error);
					this.setState({error});
				});
			}
		}
		
		_keyDown(event) {
			if ( event.key === 'Dead' ) return
			// Handle custom keyboard shortcuts globally
			let archive = this.state.archive;
			if (archive) {
				let manuscriptSession = archive.getEditorSession('manuscript');
				let handled = manuscriptSession.keyboardManager.onKeydown(event);
				if (!handled) {
					let key = substance.parseKeyEvent(event);
					// CommandOrControl+S
					if (key === 'META+83' || key === 'CTRL+83') {
						this._save();
						event.preventDefault();
					}
				}
			}
		}
		
		_save() {
			this.state.archive.save().then(() => {
				console.info('successfully saved');
			}).catch(err => {
				console.error(err);
			});
		}
		
		render($$) {
			let el = $$('div').addClass('sc-app');
			let archive = this.state.archive;
			let err = this.state.error;

			if (archive) {
				el.append(
					$$(substanceTexture.Texture, {archive})
				);
			} else if (err) {
				if (err.type === 'jats-import-error') {
					el.append(
							$$(substanceTexture.JATSImportDialog, { errors: err.detail })
					);
				} else {
					el.append(
						'ERROR:',
						err.message
					);
				}
			} else {
			// LOADING...
			}
			return el
		}
	}

})));