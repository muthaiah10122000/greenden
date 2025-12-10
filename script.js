const open = document.querySelector("#dashboard")
const close = document.querySelector("#close")

function fnopen() {

    document.querySelector("#sidenav").style.right = "0"
}


function fnclose() {

    document.querySelector("#sidenav").style.right = "-50%"
}

const products = document.getElementById("productlist")

const search = document.getElementById("search")

const prodlist = products.querySelectorAll("div")

search.addEventListener("keyup",()=>{

    var enteredvalue = event.target.value.toUpperCase()

    for(i=0;i<prodlist.length;i++) {

        const prodname = prodlist[i].querySelector("p").textContent.toUpperCase()


        if(prodname.indexOf(enteredvalue)<0) {

            prodlist[i].style.display= "none"
        }
        else {
            prodlist[i].style.display= "block"

        }
    }
})