//JavaScript by Captinpast

function loadWindow(w) {
  window.parent.postMessage({func:"loadWindow", params:w}, "*")
}
