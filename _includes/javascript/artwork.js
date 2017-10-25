
var artwork = function (track, releaseArtwork, type) {
    var discogsReleaseId = track.data('discogs_release_id');

    var setImage = function (url) {
      switch (type) {
        case 'image':
          releaseArtwork.attr('src', url);
          break;
        case 'background':
          releaseArtwork.css('background-image', 'url("' + url + '")');
          break;
      }
    };

    $.ajax({
      url: 'https://api.discogs.com/releases/' + discogsReleaseId,
      type: 'GET',
      data: {
        token: 'wwQTHCtIJjkAGRqRRbZjWWcsPhPswmpRJKQpyBSl'
      },
      dataType: 'json',
      beforeSend: function () {
        setImage('https://media.giphy.com/media/3oEhmM10mIi1dkMfmg/giphy.gif');
      },
      success: function (res) {
        var images;

        images = res.images;

        if (images.length === 0) {
          setImage(''); /* set to image url if no image is available */
        }

        images = images.filter(function (image) {
          return image.type === 'primary';
        });

        if (images.length === 0) {
          images = res.images
        }

        setImage(images[0].uri);
      },
      error: function (jqXHR, textStatus, errorThrown) {

      }
    });
};
