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
            maxItemsToShow: 20,
            minchars: 2,
            queryParamName: 'fragment',
            remoteDataType: 'json',
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
