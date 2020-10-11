let p = navigator.mediaDevices.getUserMedia({ audio: false, video: true });

p.then(function(stream) {
   document.querySelector("video").srcObject = mediaStream;
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
});
