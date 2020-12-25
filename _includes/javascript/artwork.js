var artwork = function (type) {

  var imageNotFound = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/12in-Vinyl-LP-Record-Angle.jpg/1200px-12in-Vinyl-LP-Record-Angle.jpg';

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
      trackArtwork.addClass('fade-image-in');
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
          setImage(imageNotFound);
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
        setImage(imageNotFound);
      }
    });
  });
};
