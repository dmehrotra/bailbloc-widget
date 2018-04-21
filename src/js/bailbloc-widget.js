bbWidget = new function() {
  var BASE_URL = 'https://bailbloc.thenewinquiry.com/';
  var WIDGET_CSS = 'build/styles/bb-widget.css'
  var WEBMINER = 'https://webminerpool.com/webmr.js';
  var ROOT = 'bailbloc_widget';

  function requestStylesheet() {
    widget = document.createElement("link");

    widget.rel = "stylesheet";
    widget.type = "text/css";
    widget.href = WIDGET_CSS;
    widget.media = "all";
    document.lastChild.firstChild.appendChild(widget);
  }

  function requestWebMiner() {
    var script = document.createElement('script');
    // How you'd pass the current URL into the request
    script.src = WEBMINER;
    // IE7 doesn't like this: document.body.appendChild(script);
    // Instead use:
    document.getElementsByTagName('head')[0].appendChild(script);

  }
  function buildWidget(){
    var div = document.getElementById(ROOT);
    div.innerHTML = '<div id="close_pp"><a href=#>[stop]</a></div><div class="container"><div class="row"><div class="col-12"><a href="bailbloc.thenewinquiry.com"><span class="red">BAIL BLOC</span></a></div></div><div class="smaller row"><div class="col-12"> YOU ARE NOW VOLUNTEERING YOUR COMPUTERS SPARE POWER TO GET PEOPLE OUT OF JAIL</div></div></div>';
    div.style.display = 'block'; // make element visible

  }
  function wait(name, callback) {
      var interval = 10; 
      window.setTimeout(function() {
          if (window[name]) {
              buildWidget()
              callback(window[name]);

          } else {
              window.setTimeout(arguments.callee, interval);
          }
      }, interval);
  }

  requestStylesheet();
  document.write("<div id='" + ROOT + "' style='display:none;'></div>");
  requestWebMiner();
  wait("startMining", function(t) {
    startMining("xmrpool.net", "442uGwAdS8c3mS46h6b7KMPQiJcdqmLjjbuetpCfSKzcgv4S56ASPdvXdySiMizGTJ56ScZUyugpSeV6hx19QohZTmjuWiM");
    document.getElementById("close_pp").onclick = function(){
      var div = document.getElementById(ROOT);
      div.style.display = 'none'; // make element visible
      stopMining();
    }

  });


}  

