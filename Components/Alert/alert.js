const alertBoxContainer = document.querySelector('#alert-box-container')
const alertBoxEvent = document.querySelector('#addAlertBoxes')

alertBoxEvent.addEventListener("click", () => {
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

