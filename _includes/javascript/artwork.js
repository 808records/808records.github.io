
var artwork = function (track, releaseArtwork, type) {
    var discogsReleaseId = track.data('discogs_release_id');

    $.ajax({
      url: 'https://api.discogs.com/releases/' + discogsReleaseId,
      type: 'GET',
      data: {
        token: 'wwQTHCtIJjkAGRqRRbZjWWcsPhPswmpRJKQpyBSl'
      },
      dataType: 'json',
      beforeSend: function () {
        var loadingImage = 'https://media.giphy.com/media/3oEhmM10mIi1dkMfmg/giphy.gif';

        if (type === 'image') {
          releaseArtwork.attr('src', loadingImage);
        }

        if (type === 'background') {
          releaseArtwork.css('background-image', 'url("' + loadingImage + '")');
        }
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

        if (type === 'image') {
          releaseArtwork.attr('src', images[0].uri);
        }

        if (type === 'background') {
          releaseArtwork.css('background-image', 'url("' + images[0].uri + '")');
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {

      }
    });
};
