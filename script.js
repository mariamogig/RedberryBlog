document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.getElementById("openPopupButton");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    openPopupButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});



function dragOverHandler(event) {
    event.preventDefault();
}

function dropHandler(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
}

function handleFiles(files) {
    const previewContainer = document.getElementById('preview-container');
    const filenames = Array.from(files).map(file => file.name);

    // Display filenames without revealing images
    const filenamesText = document.createElement('div');
    filenamesText.innerText = filenames.join(', ');
    previewContainer.innerHTML = '';
    previewContainer.appendChild(filenamesText);
}

document.getElementById('file-input').addEventListener('change', function () {
    handleFiles(this.files);
});
