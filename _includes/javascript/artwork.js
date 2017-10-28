var artwork = function (type) {
  $('[data-discogs_release_id]').each(function () {
    var track = $(this);
    var trackArtwork = track.find('[data-release-artwork]');
    var discogsReleaseId = track.data('discogs_release_id');

    var setImage = function (url) {
      switch (type) {
        case 'image':
          trackArtwork.attr('src', url);
          break;
        case 'background':
          trackArtwork.css('background-image', 'url("' + url + '")');
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
      success: function (res) {
        var images;

        images = res.images;

        if (images.length === 0) {
          setImage('');
          /* set to image url if no image is available */
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
  });
};
