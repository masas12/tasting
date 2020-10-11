// On Streaming
const startStreamingVideo = () => {
  const video = document.querySelector( "#video" );
  if( navigator.mediaDevices.getUserMedia ){
    navigator.mediaDevices.getUserMedia( { video: true } )
    .then( ( stream ) => {
        video.srcObject = stream;
    } );
  }
}
startStreamingVideo();
