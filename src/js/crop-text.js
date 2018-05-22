$(".main-card-text").text(function(i, text) {

  if (text.length >= 155) {
    text = text.substring(0, 155);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }

  $(this).text(text);

});
