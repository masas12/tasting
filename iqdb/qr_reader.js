let p = navigator.mediaDevices.getUserMedia({ audio: false, video: true });

p.then(function(stream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(mediaStream);
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
}
