(function ($) {

var artwork = function (track, attr) {
    var releaseArtwork = track.find('[data-release-artwork]');
    var discogsReleaseId = track.data('discogs_release_id');

    $.ajax({
      url: 'https://api.discogs.com/releases/' + discogsReleaseId,
      type: 'GET',
      data: {
        token: 'wwQTHCtIJjkAGRqRRbZjWWcsPhPswmpRJKQpyBSl'
      },
      dataType: 'json',
      beforeSend: function () {
        releaseArtwork.attr('src', 'https://media.giphy.com/media/3oEhmM10mIi1dkMfmg/giphy.gif');
      },
      success: function (res) {
        var images;

        images = res.images;

        if (images.length === 0) {
          alert('no image');
        }

        images = images.filter(function (image) {
          return image.type === 'primary';
        });

        if (images.length === 0) {
          images = res.images
        }

        window.images = images;

        if () {
          releaseArtwork.attr('src', images[0].uri);
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {

      }
    });
}

})(self.jQuery);
