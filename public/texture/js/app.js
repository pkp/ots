$(function() {
	$('input#saveDocument').click(function() {
		var saving = false;
		$('div#feedback').text('').show();
		if (buffer.hasPendingChanges()) {
			$('div#feedback').text('Saving..');
			saving = true;
		}
		else {
			$('div#feedback').text('no pending changes to save.').fadeOut('slow');
		}
		archive.save().then(() => {
			if (saving) {
				$('div#feedback').text('Done!').fadeOut('slow');
			}
		});
	});
});