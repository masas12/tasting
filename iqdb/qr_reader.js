if (!navigator.mediaDevices) {
    document.querySelector('#js-unsupported').classList.add('is-show')
}

const video  = document.querySelector('#js-video')
const canvas = document.querySelector('#js-canvas')
const ctx    = canvas.getContext('2d')

const checkImage = () => {
    // 取得している動画をCanvasに描画
    ctx.drawImage(video, 0, 0, 200, 200)

    // Canvasからデータを取得
    const imageData = ctx.getImageData(0, 0, 200, 200)

    // jsQRに渡す
    const code = jsQR(imageData.data, 200, 200)

    // QRコードの読み取りに成功したらモーダル開く
    // 失敗したら再度実行
    if (code) {
        openModal(code.data)
    } else {
        setTimeout(() => { checkImage() }, 200)
    }
}

const openModal = function(url) {
    document.querySelector('#js-result').innerText = url
    document.querySelector('#js-link').setAttribute('href', url)
    document.querySelector('#js-modal').classList.add('is-show')
}

document.querySelector('#js-modal-close')
    .addEventListener('click', () => {
        document.querySelector('#js-modal').classList.remove('is-show')
        checkImage()
    })

navigator.mediaDevices
    .getUserMedia({
         audio: false,
         video: {
             facingMode: 'environment'
         }
    })
    .then(function(stream) {
        video.srcObject = stream
        video.onloadedmetadata = function(e) {
            video.play()
            checkImage()
        }
    })
    .catch(function(err) {
        alert('Error!!')
    })
