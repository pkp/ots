$(function () {
    // Initialize Footable plugin
    $('.footable').footable(
        {
            addRowToggle: true
        }
    );

    // Initialize the citationstyle autocomplete plugin
    $('input[name="citationStyle"]').autocomplete(
        '/api/site/citationStyleAutocomplete',
        {
            remoteDataType: 'json',
            queryParamName: 'fragment',
            minchars: 2,
            processData: function(data) {
                if (data.status == 'success') {
                    return data.autocomplete;
                }
                else {
                    return [];
                }
            }
        }
    );
});
