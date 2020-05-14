//JavaScript by Captinpast

console.log(this);

var elements = {}
var sidebar = {}
sidebar.isOpen = false

window.onpopstate = function(event) {
  window.dispatchEvent(new Event("load"));
}

addEventListener("load", function() {
  elements.img = document.getElementsByClassName("sideButton")[0]
  elements.sidebar = document.getElementsByClassName("sidebar")[0]
  sidebar.is = elements.sidebar
  elements.body = document.getElementsByClassName("body")[0]
  elements.navbar = document.getElementsByClassName("navbar")[0]
  if (window.location.hash != "") {
    loadWindow(window.location.hash.slice(1 ,window.location.hash.length))
  } else {
    loadWindow("home")
  }
  addListener()
})

function addListener() {
  elements.img.onclick = function() {sidebar.switch()}
}

sidebar.open = function() {
  elements.sidebar.classList.remove("close")
  elements.body.classList.remove("close")
  elements.img.classList.remove("close")
  sidebar.isOpen = true
}
sidebar.close = function() {
  elements.sidebar.classList.add("close")
  elements.body.classList.add("close")
  elements.img.classList.add("close")
  sidebar.isOpen = false
}
sidebar.switch = function() {
  if (sidebar.isOpen) {
    sidebar.close()
  } else {
    sidebar.open()
  }
}


addEventListener("message", function(event) {
  if (event.data.func) {
    switch (event.data.func) {
      case "loadWindow":
        loadWindow(event.data.params)
        break;
      case "sidebarClose":
        sidebar.close()
        break;
      case "sidebarOpen":
        sidebar.open()
        break;
      case "setTitle":
        window.setTitle(event.data.params)
        break;
      default:
        console.log("hä?")
    }
  } else {
    console.log(event)
  }
});

function loadWindow(w) {
  elements.body.onload = null
  elements.body.style.opacity = "0"
  window.location.hash = "#"+w
  elements.sidebar.contentWindow.location.replace("./sidebar/"+w.split("/")[0]+".html")
  setTimeout(function () {
    elements.body.contentWindow.location.replace("./content/"+w+".html")
    elements.body.onload = function() {
      elements.body.style.opacity = null
    }
  }, 600);
}

window.setTitle = function(to) {
  document.title = "CPA - " + to
  elements.navbar.getElementsByClassName("title")[0].innerText = to
}

//For PWA
addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    console.log(e);
});
