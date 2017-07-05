function PRButtonCreate() {
	console.log("PRButtonCreate 1");
    var PRButtons = document.getElementsByClassName("PR-button");
    [].forEach.call(PRButtons, function (button) {
    	var url = button.getAttribute("url");
    	var params = url.split("/");
    	var owner = params[3];
    	var repo = params[4];
    	var num = params[6];
    	url = "https://api.github.com/repos/" + owner + "/" + repo + "/pulls/" + num;
    	console.log(url);
    	var client = new HttpClient();
		client.get(url, function(response) {
		    console.log(response);
		});
    });
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        anHttpRequest.setRequestHeader("Access-Control-Allow-Origin","*");
		anHttpRequest.setRequestHeader("Access-Control-Allow-Credentials", "true");
		anHttpRequest.setRequestHeader("Access-Control-Allow-Methods", "GET");
		anHttpRequest.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");          
        anHttpRequest.send( null );
    }
}

function createButtons() {
	console.log("createButtons");
	PRButtonCreate();
}

if(window.attachEvent) {
    window.attachEvent('onload', createButtons);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            createButtons(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = createButtons;
    }
}