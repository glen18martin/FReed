document.addEventListener("deviceready", onDeviceReady, false);

//Device Ready Function
function onDeviceReady() {

    //Opening the link in the inappbrowser
    $(document).on('click', '#link', function() {
        var website = $(this).attr('data-link');
        window.open = cordova.InAppBrowser.open;
        var ref = window.open(website, '_blank', 'location=yes');

    });
}

//Loading Javascript API
google.load("feeds", "1");

//Defining initialize method fetching feeds and displaying them
function initialize(url) {

    //Calling google's feed method
    var feed = new google.feeds.Feed(url);

    //Setting the result format = Json Format
    feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);

    //Setting the number of results = 10 
    feed.setNumEntries(10);


    //Loading the feeds
    feed.load(function(result) {
        var div1 = "";
        var pubdate;
        if (!result.error) {
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];

                //Grabbing Blog URL, Blog title, Blog Category and Publish Date and displaying them
                div1 += "<li><a class='ui-btn ui-btn-icon-right ui-icon-carat-r' id=\"link\" data-link=\"" + entry.link + "\">" + entry.title + "<p>" + entry.publishedDate + "</p>" + "</a></li>";
                document.getElementById("myTable").innerHTML = div1;

                var title = entry.title;
                var link = entry.link;
                var date = entry.publishedDate;

                //console.log(title);

                title = title.toString().replace(/\'/g, " ");
                title = title.toString().replace(/&amp;/g, "and");

                //console.log(title);


                var dataString = "title=" + title + "&link=" + link + "&date=" + date + "&insert=";
                $.ajax({
                    type: "POST",
                    url: "http://192.168.0.5:3002/save", //replace with url
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    success: function(data) {
                        if (data == "success") {

                        } else if (data == "error") {
                            alert("Connection ERROR");
                        }
                    }
                });

            }
        }
    });
}

//Grabbing Feed URL entered by the user
$(document).ready(function() {
    $("#getfeed").click(function() {
        var url = $("#feedurl").val();
        initialize(url);

        var dataString = "url=" + url + "&insert=";
        $.ajax({
            type: "POST",
            url: "http://192.168.0.5:3002/fav", //replace with url
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data) {
                if (data == "success") {

                } else if (data == "error") {
                    alert("Connection ERROR");
                }
            }
        });
    });
});