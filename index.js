
counter = 0

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
imgsrcs = Array.from(document.getElementsByClassName("hidden-imgs"))

function my_remove(delIndex) {
    rndNum = getRandomArbitrary(0, imgsrcs.length)
    console.log(`rndNum=${rndNum},${imgsrcs[rndNum]}`)
    imgs[delIndex].src = imgsrcs[rndNum].src
    imgsrcs.splice(rndNum, 1)
}

window.onload = (e) => {
    my_remove(0)
    my_remove(1)
}

function remove_listener(event) {
    img = event.currentTarget
    i = img._index

    delIndex = 1 - i

    if (counter == output.innerHTML) {

        img.removeEventListener("click", remove_listener)
        imgs[delIndex].style.visibility = "hidden"




    }
    else {
        my_remove(delIndex)
        counter++

    }

    if (counter >= 1) {
        document.getElementById("myRange").disabled = true;
    }


}

for (const [i, img] of imgs.entries()) {
    img._index = i
    img.addEventListener("click", remove_listener)
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}
