// https://www.w3schools.com/jsref/prop_radio_form.asp

var count = count++;
var inputQ1 = "<input type='"'radio'"' id='"'a1'"'"+count+""'>"

q1 = "Which of these colors did King Henry XIII wear the most often?"
a1 = ["burnt orange","navy blue","turquoise","teal"];

q2 = "Which of these colors would you wear the most often?"
a2 = ["salmon","coral","peach","teal"];

q3 = "Which color is not in the rainbow?"
a3 = ["tan","brown","white","black","none of the above"];


var x = document.createElement("INPUT");
    x.setAttribute("label", q1)
    x.setAttribute("type", "radio")
    x.setAttribute("name", a1[0])
    x.setAttribute("required", true)
    x.setAttribute("value", 2);

    


// var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

// // Variable showImage will hold the setInterval when we start the slideshow
// var showImage;

// // Count will keep track of the index of the currently displaying picture.
// var count = 0;

// // TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
// $("#start").click(startSlideshow);

// // TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
// $("#stop").click(stopSlideshow);


// // This function will replace display whatever image it's given
// // in the 'src' attribute of the img tag.
// function displayImage() {
//   $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
// }

// function nextImage() {
//   //  TODO: Increment the count by 1.
//   count++;

//   // TODO: Show the loading gif in the "image-holder" div.
//   $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

//   // TODO: Use a setTimeout to run displayImage after 1 second.
//   setTimeout(displayImage, 1000);

//   // TODO: If the count is the same as the length of the image array, reset the count to 0.
//   if (count === images.length) {
//     count = 0;
//   }
// }

// function startSlideshow() {

//   // TODO: Use showImage to hold the setInterval to run nextImage.
//   if (!showImage) {
//     showImage = setInterval(nextImage, 3000);
//   }
// }

// function stopSlideshow() {

//   // TODO: Put our clearInterval here:
//   clearInterval(showImage);
//   showImage = undefined;

// }

// // This will run the display image function as soon as the page loads.
// displayImage();
