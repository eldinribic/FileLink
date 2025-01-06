function downloadZip() {
    const fileName = "FileLinkExploit.zip";
    const fileUrl = `${window.location.origin}/files/${fileName}`;

    const tempLink = document.createElement("a");
    tempLink.href = fileUrl;
    tempLink.download = fileName;
    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    console.log("File download triggered:", fileName);
}