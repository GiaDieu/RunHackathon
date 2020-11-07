import React from "react";
import "./SpeechToText.css";

export const SpeechToText = () => {
  const textDom = `
    <div id="preloader" style="opacity: 0; display: none;">
        <noscript>
            <h1>This application does'not work without javascript</h1>
        </noscript>
    <div class="logo"></div>
    </div>

    <div class="b-agent-demo">
        <div class="b-agent-demo_header">
            <div class="b-agent-demo_header-icon" style='border-radius: 0;overflow: visible;'>
                <div class="b-agent-demo_header-icon-align-helper">
                    <!-- <img id="agent-avatar" src="https://www.gstatic.com/dialogflow-console/common/assets/img/logo-short.png"> -->
                    <span style='position: absolute ;
                                top: 7px;
                                color:#fff;
                                font-size: 2rem;
                                display:flex' >
                                KAO
                    </span>
                </div>
            </div>
            <div class="b-agent-demo_header-wrapper" style="display:none">
                <div class="b-agent-demo_header-agent-name">NewAgent</div>
                <div class="b-agent-demo_header-description"></div>
            </div>
        </div>
        <div class="b-agent-demo_powered_by" style='display: none'>
            <a href="https://dialogflow.com" target="_blank">
                
                <img src="https://console.dialogflow.com/api-client/assets/img/logo-black.png">
                
                    <span>Powered by</span>
                
            </a>
        </div>
        <div class="b-agent-demo_result" id="resultWrapper">
            <table class="b-agent-demo_result-table"><tbody><tr><td id="result"></td></tr></tbody></table>
        </div>
        <div class="clearfix"></div>
        <div class="b-agent-demo_input">
            <form id="agentDemoForm">
                <input type="text" name="q" id="query" placeholder="Ask something...">
                <i class="b-agent-demo_input-microphone material-icons-extended" id="mic" style="display: block;">mic</i>

                <!--div class="b-agent-demo_input-microphone material-icons-extended mic-black" id="mic"></div-->
            </form>
        </div>
    </div>


    <script>
    AGENT_LANGUAGE = "en";
    AGENT_ID = "de5f3323-368d-4b07-b0bd-a890602c18a7";
    AGENT_AVATAR_ID = "https://www.gstatic.com/dialogflow-console/common/assets/img/logo-short.png";
    SERVICE_BASE_URL = "https://console.dialogflow.com/api-client/";
    BOT_SERVICE_BASE_URL = "https://bots.dialogflow.com";
    V2_ENABLED = true;

    // non-blocking CSS delivery

    var loadDeferredStyles = function() {
        var addStylesNode = document.getElementById("deferred-styles");
        var replacement = document.createElement("div");
        replacement.innerHTML = addStylesNode.textContent;
        document.body.appendChild(replacement)
        addStylesNode.parentElement.removeChild(addStylesNode);
    };

    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

    if (raf) {
        raf(function() { window.setTimeout(loadDeferredStyles, 0); });
    } else {
        window.addEventListener('load', loadDeferredStyles);
    }

    window['addStyleString'] = function(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.head.appendChild(node);
    };
    </script>
    <script defer="" src="https://assets.dialogflow.com/b/dialogflow_ui_20200914_0937_webdemo_2_RC00/js/bundles/agentDemo.bundle.min.js"></script>
    <!-- Google Analytics -->
    <script>
    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
    ga('create', 'UA-50971730-1', 'auto');
    ga('send', 'pageview');
    </script>
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>


    <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Extended" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    </div>
    <style>

      @-moz-keyframes blink {0%{opacity:1;} 50%{opacity:0;} 100%{opacity:1;}} /* Firefox */
      @-webkit-keyframes blink {0%{opacity:1;} 50%{opacity:0;} 100%{opacity:1;}} /* Webkit */
      @-ms-keyframes blink {0%{opacity:1;} 50%{opacity:0;} 100%{opacity:1;}} /* IE */
      @keyframes blink {0%{opacity:1;} 50%{opacity:0;} 100%{opacity:1;}} /* Opera and prob css3 final iteration */
  
      #preloader {
          background: #fff;
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 999999;
          opacity: 1;
          filter: alpha(opacity=100);
          -webkit-transition: opacity 500ms ease;
          transition: opacity 500ms ease;
      }

      #preloader .logo {
          display: block;
          width: 109px;
          height: 39px;
          background-repeat: no-repeat;
          background-image: url('https://console.dialogflow.com/api-client/assets/img/logo@2x-black.png');
          background-size: contain;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -20px 0 0 -55px;
          -moz-transition:all 1s ease-in-out;
          -webkit-transition:all 1s ease-in-out;
          -o-transition:all 1s ease-in-out;
          -ms-transition:all 1s ease-in-out;
          transition:all 1s ease-in-out;
          /* order: name, direction, duration, iteration-count, timing-function */
          -moz-animation:blink normal 2s infinite ease-in-out; /* Firefox */
          -webkit-animation:blink normal 2s infinite ease-in-out; /* Webkit */
          -ms-animation:blink normal 2s infinite ease-in-out; /* IE */
          animation:blink normal 2s infinite ease-in-out; /* Opera and prob css3 final iteration */
      }

      noscript h1 {
          padding: 20px;
      }
  </style>
`;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: textDom }} />
    </>
  );
};

export default SpeechToText;
