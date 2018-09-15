$(document).ready(function(){

  $("#submit").on("click", function(event){
    event.preventDefault()

    function checkForm() {
      var isValid = true;
      $(".form-control").each(function(){
        if ($(this).val() === "") {
          isValid = false
        }
      })
      return isValid
    };

    if (checkForm()) {
      var newFriend = {
        name: $("#name").val(),
        scores: [
          $("#question1").val(),
          $("#question2").val(),
          $("#question3").val(),
          $("#question4").val(),
          $("#question5").val(),
          $("#question6").val(),
          $("#question7").val(),
          $("#question8").val(),
          $("#question9").val(),
          $("#question10").val()
        ]
      };

      $.post("/api/friends", newFriend, function(response){
        $("#match-name").text(response.name)
        // $("#matchModal").modal("toggle")
        console.log(response)
      })
    }

    else {
      alert("Please finish the survey!")
    };







  });





















});
