$( document ).ready(function() {

  var textForCrop = $('[class *= "crop-"]');

  $.each(textForCrop, function(index, value) {

    var cName = value.className;
    var numberOfCharacters = cName.split("-")[1];
    var text = value.innerText;

    if (text.length >= numberOfCharacters) {
      text = text.substring(0, numberOfCharacters);
      var lastIndex = text.lastIndexOf(" ");
      text = text.substring(0, lastIndex) + '...';
    }

    $(this).text(text);

  });

});
