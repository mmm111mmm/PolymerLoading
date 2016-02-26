window.addEventListener('DOMContentLoaded', function(e) { 

    var s = document.createElement('div'); 
    s.className = "pulse";
    s.id = "loader";
    s.innerHTML = "Loading...";
    document.body.insertBefore(s, document.body.firstChild);

    var style = document.createElement("style");
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    document.styleSheets[0].insertRule(".pulse{ animation-name: pulse; animation-duration: 1.5s;   animation-iteration-count: infinite; animation-fill-mode: forwards; }", 0);
    document.styleSheets[0].insertRule("@keyframes pulse { 0% { transform: scale(0.9); opacity: 0.7; } 50% { transform: scale(1); opacity: 1; } 100% { transform: scale(0.9); opacity: 0.7; } }", 1);
    document.styleSheets[0].insertRule(".fadeout{ animation-name: fadeout; animation-duration: 0.2s; animation-fill-mode: forwards; animation-iteration-count: 1; }", 2);
    document.styleSheets[0].insertRule("@keyframes fadeout { 0% { opacity: 0.7; } 50% { opacity: 0.4; } 100% { opacity: 0.0; } }", 3);
    document.styleSheets[0].insertRule("#loader { position: fixed; display: flex; flex-direction: column; justify-content: center; width: 100%; height: 100%; background: white; font-size: 40px; text-align: center; }", 4);
});
window.addEventListener('WebComponentsReady', function(e) { 
    document.querySelector('#loader').className= "fadeout";
});



