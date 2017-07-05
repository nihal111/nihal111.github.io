$(function() {
	$('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.css" type="text/css" />');
    createButtons();
});

function createButtons() {
	$('.github-button').each(function(i, button) {
		var url = $(button).attr("url");
    	var params = url.split("/");
    	var owner = params[3];
    	var repo = params[4];
    	var num = params[6];

    	if (url.indexOf("pull") !== -1) {
    		url = "https://api.github.com/repos/" + owner + "/" + repo + "/pulls/" + num;
    		$.get(
			    url,
			    function(data) {
			    	var date = formatDate(new Date(data.created_at));
			        $(button).append(
			       	$('<a/>', {'class': 'number', 'href': data.html_url, 'text': "#" + data.number}),
			       	$('<a/>', {'class': 'title', 'href': data.html_url, 'text': data.title}),
			       	$('<span/>', {'class': 'meta'}).append(
			       		$('<a/>', {'class': 'repo', 'href': data.base.repo.html_url, 'text': data.base.repo.full_name}),
			       		$('<i/>', {'class': 'octicon octicon-clock'}),
			       		$('<span/>', {'class': 'date', 'text': date})
			       		),
			       	$('<i/>', {'class': 'right-icon mega-octicon octicon-git-pull-request'}),
			       	)
			     	if (data.merged ) {
			     		$(button).find('.octicon-git-pull-request').addClass('octicon-git-merge').removeClass('octicon-git-pull-request');
			     		$(button).addClass('merged-PR-button');
			     	} else {
			     		$(button).addClass('open-PR-button');
			     	}
			    }
			);
    	} else if (url.indexOf("issue") !== -1) {
    		url = "https://api.github.com/repos/" + owner + "/" + repo + "/issues/" + num;
    		$.get(
			    url,
			    function(data) {
					var repo_name = data.repository_url.split("/");
					repo_name = repo_name[repo_name.length - 2] + "/" + repo_name[repo_name.length - 1];
					var date = formatDate(new Date(data.created_at));
					$(button).append(
			       	$('<a/>', {'class': 'number', 'href': data.html_url, 'text': "#" + data.number}),
			       	$('<a/>', {'class': 'title', 'href': data.html_url, 'text': data.title}),
			       	$('<span/>', {'class': 'meta'}).append(
			       		$('<a/>', {'class': 'repo', 'href': data.repository_url, 'text': repo_name}),
			       		$('<i/>', {'class': 'octicon octicon-clock'}),
			       		$('<span/>', {'class': 'date', 'text': date})
			       		),
			       	$('<i/>', {'class': 'right-icon mega-octicon octicon-issue-opened'}),
			       	)
			       	var open = "open";
			       	if (data.state === "open") {
			     		$(button).addClass('open-issue-button');
			     	} else {
			     		$(button).find('.octicon-issue-opened').addClass('octicon-issue-closed').removeClass('octicon-issue-opened');
			     		$(button).addClass('closed-issue-button');
			     	}
			    }
			);
    	}
	});
}

function formatDate(d) {
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", 
		"Jul", "Aug", "Sept", "Oct", "Nov", "Dec");
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	return   m_names[curr_month] + " " + curr_date + ", " + curr_year;
}