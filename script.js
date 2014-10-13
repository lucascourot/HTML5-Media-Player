var urlInput     = document.querySelector('#media-player input[name=url]');
var videoField   = document.querySelector('#media-player video');
var submitButton = document.querySelector('#media-player input[type=submit]');
var stopButton  = document.querySelector('#stop');

var playVideo = function(event) {
    event.preventDefault();

    videoField.setAttribute('src', urlInput.value);
    videoField.play();
};

submitButton.addEventListener('click', playVideo);

stopButton.addEventListener('click', function() {
    videoField.pause();
});
