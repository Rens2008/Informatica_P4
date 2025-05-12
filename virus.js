var data = new FormData();
data.append("inputFile", fileInput.files[0], "file");
 
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
     if(this.readyState === 4) {
          console.log(this.responseText);
     }
});

xhr.open("POST", "https://api.cloudmersive.com/virus/scan/file");

xhr.setRequestHeader("Apikey", "ba661b46-713a-47ce-985a-89d4d55aff72");

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log("File scanned successfully:", xhr.responseText);
    } else {
        console.error("Error scanning file:", xhr.statusText);
    }
};
xhr.setRequestHeader("Content-Type", "multipart/form-data");
xhr.send(data);