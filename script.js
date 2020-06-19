let placeSearch, autocomplete;
let countryRestriction = {'country': 'ar'};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    document.getElementById('autocomplete'),
    {
      types: ['geocode'],
      componentRestrictions: countryRestriction
    }
  );

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  autocomplete.setFields(["geometry"]);
  var location = autocomplete.getPlace().geometry.location;
  
  document.getElementById("lat").value = location.lat();
  document.getElementById("long").value = location.lng();
}