// (function () {
//     let fileInput = document.getElementById('fileUpload');
//     let section = document.getElementById('imageUpload');
//     fileInput.addEventListener("change", function (e) {
//         let pattern = "/image.*/";
//         let file = fileInput.files[0];
//           var preview = document.querySelector('img');
//           var reader  = new FileReader();
        
//           reader.addEventListener("load", function () {
//             preview.src = reader.result;
//             console.log(file.size);
//           }, false);
        
//           if (fileInput) {
//             reader.readAsDataURL(file);
//           }
//         /*
//         console.log(filereader.target.result)
//         if(file.type == "image/png" && file.type == "image/jpg") {
//             let filereader = new FileReader();
//             filereader.readAsDataURL(file);
//             filereader.onload = function () {
//                 let image = document.createElement("IMG");
//                 image.setAttribute("src", filereader.result);
//                 section.appendChild(image);
                
//             }
//         }
//         */
//     });
// }());
// function previewFile() {
//   var preview = document.querySelector('img');
//   var file    = document.querySelector('input[type=file]').files[0];
//   var reader  = new FileReader();

//   reader.addEventListener("load", function () {
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }