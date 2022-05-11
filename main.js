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



const CLASS_NAME_HIDE = 'hide-content'
const CLASS_NAME_SHOW = 'show'


//modal demo
var btn = document.querySelector('#myBtn')
var modal = document.querySelector('#modal-demo-container')
var close = document.querySelector('#closeBtn')

btn?.addEventListener('click', () => {
    modal.classList.add(CLASS_NAME_SHOW)
    modal.classList.remove(CLASS_NAME_HIDE)
})
close?.addEventListener('click', () => {
    console.log("Hello");
    modal.classList.remove(CLASS_NAME_SHOW)
    modal.classList.add(CLASS_NAME_HIDE)
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove(CLASS_NAME_SHOW)
        modal.classList.add(CLASS_NAME_HIDE)
    }
})


/* Live ToastB button */
var liveToastButton = document.querySelector('#liveToastButton')
var liveToast = document.querySelector('#liveToast')
var closeBtn = document.querySelector('#closeBtn')

liveToastButton?.addEventListener('click', () => {
    liveToast.classList.remove(CLASS_NAME_HIDE)

    setTimeout(() => {
        liveToast.classList.add(CLASS_NAME_HIDE)
    }, 5000);
})

closeBtn?.addEventListener("click", () => {

    liveToast.classList.add(CLASS_NAME_HIDE)
})


var topRight = document.querySelector('#topRight')
var bottomRight = document.querySelector('#bottomRight')
var bottomLeft = document.querySelector('#bottomLeft')

var toastPlacement = document.querySelector('#toastPlacement')

topRight?.addEventListener('click', () => {
    removeClassList()
    toastPlacement.classList.add('top-right')
    hideToaster()

})
bottomRight?.addEventListener('click', () => {
    removeClassList()
    toastPlacement.classList.add('bottom-right')
    hideToaster()

})
bottomLeft?.addEventListener('click', () => {
    removeClassList()
    toastPlacement.classList.add('bottom-left')
    hideToaster()
})

let removeClassList = () => {
    toastPlacement.classList.remove('top-right', 'bottom-right', 'bottom-left')
}

let hideToaster = () => {
    setTimeout(() => {
        toastPlacement.classList.remove('top-right', 'bottom-right', 'bottom-left')
    }, 3000);
}



/* navbar */
const navBarhiddedContent = document.querySelector('.collapse')
const navbarCollapseBtn = document.querySelector('#navbarCollapseBtn')

navbarCollapseBtn?.addEventListener("click", () => {
    console.log(navBarhiddedContent.style.display);
    if (navBarhiddedContent.style.display === "") {
        navBarhiddedContent.style.display = "block"
    } else if (navBarhiddedContent.style.display === "block") {
        navBarhiddedContent.style.display = "none"
    } else if (navBarhiddedContent.style.display = "none") {
        navBarhiddedContent.style.display = "block"
    }
})