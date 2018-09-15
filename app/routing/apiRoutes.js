var path = require("path")

var friends = require("../data/friends.js")

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends)
  })
//I HAD NO CLUE HOW TO SORT THIS STUPID THING THIS TOOK FIVE HOURS
  app.post("/api/friends", function(req, res) {
    var newFriend = {
      name: req.body.name,
      scores: req.body.scores
    }
    var totalDiff = []
    var totalDiffCopy = []
    var sortedDiff = []
    for (var i = 0; i < friends.length; i++) {
      var array = []
      for (var j = 0; j < newFriend.scores.length; j++) {
        array.push(Math.abs(parseInt(newFriend.scores[j]) - (parseInt(friends[i].scores[j]))))
      }
      totalDiff.push(array.reduce(function(acc, val) { return acc + val; }, 0))
      totalDiffCopy.push(array.reduce(function(acc, val) { return acc + val; }, 0))
      sortedDiff.push(totalDiffCopy.sort(function(a, b){return a-b}))
    }
    var smallestDifference = totalDiffCopy[0]
    var matchLocation = totalDiff.indexOf(smallestDifference)
    var bestMatch = friends[matchLocation]
    friends.push(newFriend)
    res.json(bestMatch)
  })

}
