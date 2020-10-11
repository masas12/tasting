const canvas = document.querySelector('#js-canvas')
const ctx = canvas.getContext('2d')

const checkImage = () => {
    // 取得している動画をCanvasに描画
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Canvasからデータを取得
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    // jsQRに渡す
    const code = jsQR(imageData.data, canvas.width, canvas.height)

    // QRコードの読み取りに成功したらモーダル開く
    // 失敗したら再度実行
    if (code) {
        openModal(code.data)
    } else {
        setTimeout(() => { checkImage() }, 200)
    }
}
