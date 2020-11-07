AGENT_LANGUAGE = "en";
AGENT_ID = "de5f3323-368d-4b07-b0bd-a890602c18a7";
AGENT_AVATAR_ID =
  "https://www.gstatic.com/dialogflow-console/common/assets/img/logo-short.png";
SERVICE_BASE_URL = "https://console.dialogflow.com/api-client/";
BOT_SERVICE_BASE_URL = "https://bots.dialogflow.com";
V2_ENABLED = true;

// non-blocking CSS delivery

var loadDeferredStyles = function () {
  var addStylesNode = document.getElementById("deferred-styles");
  var replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement);
  addStylesNode.parentElement.removeChild(addStylesNode);
};

var raf =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

if (raf) {
  raf(function () {
    window.setTimeout(loadDeferredStyles, 0);
  });
} else {
  window.addEventListener("load", loadDeferredStyles);
}

window["addStyleString"] = function (str) {
  var node = document.createElement("style");
  node.innerHTML = str;
  document.head.appendChild(node);
};
