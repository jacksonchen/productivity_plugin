var currentTime, diff, timeInt;

function showEnd() {
  $('div#start').hide();
  $('div#end').show();
}

function showStart() {
  $('div#end').hide();
  $('div#start').show();
}

$(document).ready(function() {
  chrome.storage.sync.get('start', function(obj) {
    if (typeof obj.start == 'undefined') {
      showStart();
    }
    else {
      showEnd();
      startInterval();
    }
  })
  $('div#start').on("click", function() {
    var timestamp = Math.round(new Date() / 1000);
    chrome.storage.sync.set({'start': timestamp}, function() {
      showEnd();
      startInterval();
    })
  });

  $('div#end').on("click", function() {
    clearInterval(timeInt);
    chrome.storage.sync.get('start', function(obj) {
      chrome.storage.sync.clear(function() {
        showStart();
      })
    })
  })
})

function startInterval() {
  timeInt = setInterval(function() {
    console.log("test");
    currentTime = Math.round(new Date() / 1000);
    chrome.storage.sync.get('start', function(obj) {
      diff = currentTime - obj.start;
      $('div#figure').text(diff);
    });
  }, 1000);
}
