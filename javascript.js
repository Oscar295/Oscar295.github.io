/*Name this external file gallery.js*/

function upDate(previewPic){
        x = document.getElementById("image");
        console.log(previewPic.src);
        console.log(x);
        var altText = previewPic.alt;
        x.style.backgroundImage = "url('" + previewPic.src + "')";
        x.innerHTML = altText;
       }
   
       function unDo(){
           x = document.getElementById("image");
        x.style.backgroundImage = "url('')";
        x.innerHTML = "Hover over an image below to display here.";
       }
