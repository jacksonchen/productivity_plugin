// chrome.tabs.query({}, function(tabs) {
//   $.getJSON('blocked.json', function(data) {
//     console.log(data);
//   })
//   tabs.forEach(function(tab) {
//     tab.url.match
//   })
// });

chrome.tabs.getCurrent(function(tab) {
  chrome.tabs.remove(tab.id, function() {})
})
