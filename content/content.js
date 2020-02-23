//JavaScript by Captinpast

addEventListener("load", function() {
  window.parent.postMessage({func:"sidebarOpen"}, '*')
  window.parent.postMessage({func:"setTitle", params:document.title}, '*')
})

function loadWindow(w) {
  window.parent.postMessage({func:"loadWindow", params:w}, "*")
}
