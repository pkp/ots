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

    // Focus on the first element in the login form when the page is loaded
    $('form[name="login"] *:input[type!=hidden]:first').focus();
});
