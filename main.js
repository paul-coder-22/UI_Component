//alert js

const alertBoxContainer = document.querySelector('#alert-box-container')
const alertBoxEvent = document.querySelector('#addAlertBoxes')

alertBoxEvent?.addEventListener("click", () => {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `
    <div class="alert-box alert-success flex-row-spc-btw">Nice, you triggered this alert message!
        <span>
            <button class="btn" id="closeBtn" onclick="getClsBtn()" ><i class="fa-solid fa-x"></i></button>
        </span>
    </div>
    `
    alertBoxContainer.appendChild(newDiv)
})

const getClsBtn = () => {
    document.querySelector('#closeBtn').parentElement.parentElement.parentElement.remove()
}





//modal demo
var btn = document.querySelector('#myBtn')
var modal = document.querySelector('#modal-demo-container')
var close = document.querySelector('#closeBtn')

btn.addEventListener('click', () => {
    modal.classList.add('show')
    modal.classList.remove('hide-content')
})
close.addEventListener('click', () => {
    console.log("Hello");
    modal.classList.remove('show')
    modal.classList.add('hide-content')
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show')
        modal.classList.add('hide-content')
    }
})
console.log("Hello");