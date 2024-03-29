/-------------------------- Get Page Elements --------------------------/
const form = document.querySelector('#generate-form');
const qrContent = document.querySelector("#qr-content")
const qrGenerated = document.querySelector('#qrcode');
const save = document.querySelector('#save-btn');

document.querySelector('#websites p').scrollIntoView();

/-------------------------- Show Spinner --------------------------/
const showSpinner = () => {
    document.querySelector('#spinner').style.display = 'block'
}


/-------------------------- Hide Spinner --------------------------/
const hideSpinner = () => {
    document.querySelector('#spinner').style.display = 'none'
}


/-------------------------- Generate QR Code --------------------------/
// const generateQRCode = (url, size, dark, light) => {
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        // colorDark: dark,
        // colorLight: light,
    });
};


/-------------------------- Image Input --------------------------/
const imageInput = document.querySelector("#image-input");

let imageUrl = new Image();

imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        imageUrl.src = uploaded_image
    });
    reader.readAsDataURL(this.files[0]);
});


/-------------------------- Form Submission --------------------------/
const onGenerateSubmit = (e) => {

    if (e) {
        e.preventDefault();
        document.querySelector('#qr-container').scrollIntoView()
    }

    clearUI()

    const url = document.querySelector('#url-input').value
    const size = document.querySelector('#size-input').value
        // const light = document.querySelector('#color-background-input').value
        // const dark = document.querySelector('#color-pattern-input').value

    if (url === '') {
        alert('Please enter a URL')
    } else {
        showSpinner()
        setTimeout(() => {
            hideSpinner();
            // generateQRCode(url, size, dark, light)
            generateQRCode(url, size)
            setTimeout(() => {
                /-------------------------- Create Canvas --------------------------/
                let canvas = document.querySelector("#uploaded-img");
                let ctx = canvas.getContext('2d');

                canvas.width = size;
                canvas.height = size;

                // For Circle
                // canvas.style.border = '8px solid red';
                // canvas.style.margin = '60px';
                // canvas.style.borderRadius = '300px';
                // canvas.style.overflow = 'visible';

                /-------------------------- Add QR Code to Canvas --------------------------/
                let qrIMG = new Image();
                const qrURL = qrGenerated.querySelector('img').src
                qrIMG.src = qrURL
                    // Circle
                    // ctx.drawImage(qrIMG, (size / 2 - ((size - 60) / 2)), (size / 2 - ((size - 60) / 2)), (size - 60), (size - 60));
                    // Square
                ctx.drawImage(qrIMG, 0, 0);

                /-------------------------- Resize Logo for Canvas --------------------------/
                let w = imageUrl.width;
                let h = imageUrl.height;
                var sizer = scalePreserveAspectRatio(w, h, canvas.width * 0.35, canvas.height * 0.35);

                function scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
                    return (Math.min((maxW / imgW), (maxH / imgH)));
                }
                /-------------------------- Add White Background with Stroke for Logo --------------------------/
                let rectangleX = (size / 2) - (w * sizer / 2);
                let rectangleY = (size / 2) - (h * sizer / 2);
                let rectangleW = w * sizer;
                let rectangleH = h * sizer;

                ctx.beginPath();
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(rectangleX, rectangleY, rectangleW, rectangleH);

                ctx.lineWidth = "6";
                // ctx.strokeStyle = light;
                ctx.strokeStyle = '#000000';
                ctx.rect(rectangleX - 3, rectangleY - 2.5, rectangleW + 5, rectangleH + 5);
                ctx.stroke();

                /-------------------------- Add Logo  to Canvas --------------------------/
                ctx.drawImage(imageUrl, 0, 0, w, h, (size / 2) - (w * sizer / 2), (size / 2) - (h * sizer / 2), w * sizer, h * sizer);

                /-------------------------- Save Button --------------------------/
                createSaveBtn(document.querySelector('canvas').src)
            }, 50)

        }, 1000);
    }

}

/-------------------------- Clear QR Code -------------------------- /
const clearUI = () => {
    qrGenerated.innerHTML = "";
    save.innerHTML = "";
    const canvas = document.querySelector("#uploaded-img");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}


/-------------------------- Save QR Image --------------------------/
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'button';
    link.href = document.querySelector('#uploaded-img').toDataURL('image/png');
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    save.appendChild(link);
}

hideSpinner()


document.querySelector("#qrForm button").addEventListener('click', onGenerateSubmit)



function uploadFile(target) {
    document.getElementById("file-name").innerHTML = target.files[0].name;
}

onGenerateSubmit()
document.querySelector('#url-input').value = '';