const slider = document.getElementById("onOffSlider")
const conDisP = document.getElementById("conDisP")
const connectA = document.getElementById("connectA")
const discA = document.getElementById("discA")

slider.addEventListener("click", conDis)

connectA.volume = 0.3
discA.volume = 0.3


function conDis(){
    console.log("here")
    if(slider.checked){
        console.log(slider)
        conDisP.classList.remove("disconnected")
        conDisP.classList.add("connected")
        conDisP.innerHTML = "Connected!"
        connectA.play()
    }else{
        conDisP.classList.remove("connected");
        conDisP.classList.add("disconnected")
        conDisP.innerHTML = "Disconnected"
        discA.play()
    }
}