$( document ).ready(function() {

  var pictureItem = $('.carousel-item').children();

  $.each(pictureItem, function(index, value) {

    var newCol = $('<div>', { class:'col-md-4 col-sm-6 col-12'});
    var newPicCard = $('<div>', { class:'picture-card'}).appendTo(newCol);
    var linkLightbox = $('<a>', { class:'chocolat-image', href: value.src}).appendTo(newPicCard);
    var image = $('<img>', { src: value.src}).appendTo(linkLightbox);

    var rowContainer = $('.photos-gallery>.container>.row').append(newCol);
    var rowContainerFluid = $('.photos-gallery>.container-fluid>.row').append(newCol);

  });

});



// Script above is for get html:

// <div class="col-lg-4 col-sm-6 col-12">
//   <div class="picture-card">
//     <a class="chocolat-image" href="img/DSC_1292.jpg">
//       <img src="img/DSC_1292.jpg">
//     </a>
//   </div>
// </div>
