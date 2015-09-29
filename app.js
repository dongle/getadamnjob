// TODO
// implement start page
// implement snarky white old guy
// implement sounds

var counter = 0;
var url = "";

// Indeed API stuff
const indeedURL = "http://api.indeed.com/ads/apisearch";
const publisherID = 5631779218275344;
var params = {'v': '2', 'format': 'json', 'publisher': publisherID, 'limit': 1, 'l': 11237, 'start': counter};
//



// API

function getANewJob() {
  counter++;
  console.log(counter);
  $('.odometer').html(counter);
  params.start = counter;
  $.ajax({
      url: indeedURL,
      dataType: 'jsonp',
      type: 'GET',
      data: params,
      success: gotAJob
  });
}

function gotAJob(data) {
  console.log("got jobs!");
  console.log(data.results);

  // print job data in job div
  var job = data.results[0];
  $('#title').html(job.company + " – " + job.jobtitle);
  $('#snippet').html(job.snippet);
  url = job.url;
}

// LOAD

$( document ).ready(function() {
    getANewJob();

    $('#start').click(function(){
      console.log("started");
    });

    $('#getJob').click(function(){
      getANewJob();
    });

    $('#likeJob').click(function(){
      console.log("liked Job");
      window.location.href = url;
    });

  window.odometerOptions = {
    duration : 250
  };
});
