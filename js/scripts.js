$(document).ready(function () {
  var javaScript = 0;
  var python = 0;
  var basic = 0;
  var sql = 0;

  $("#formRadio1").submit(function (event) {
    event.preventDefault();
    $("#formRadio2,#formRadio3,#formRadio4,#formRadio5,#formRadio6,#formRadio7").hide();
    const celeb = $("input:radio[name=answer1]:checked").val();
    if (celeb === "kermit") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return kermit++;
    } else if (celeb === "mspiggy") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return mspiggy++;
    } else if (celeb === "chef") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return chef++;
    } else {
    }
  });

  $("#formRadio2").submit(function (event) {
    event.preventDefault();
    const food = $("input:radio[name=answer2]:checked").val();
    if (food === "kermit") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return kermit++;
    } else if (food === "mspiggy") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return mspiggy++;
    } else if (food === "chef") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return chef++;
    } else {
    }
  });


  $("#formRadio3").submit(function (event) {
    event.preventDefault();
    const home = $("input:radio[name=answer3]:checked").val();
    if (home === "kermit") {
      kermit++;
      $("#formRadio3").hide();
      // alert(kermit);
      // alert(mspiggy);
      // alert(chef);

    } else if (home === "mspiggy") {
      mspiggy++;
      $("#formRadio3").hide();
      // alert(kermit);
      // alert(mspiggy);
      // alert(chef);
    } else if (home === "chef") {
      chef++;
      $("#formRadio3").hide();
      // Test whether scores are being tabulated
      // alert(kermit);
      // alert(mspiggy);
      // alert(chef);   
    } else {
    }
    // Calculate and show Results
    $("#showResult").show();
    if (kermit >= 2) {
      // alert("testfrog");
      $("#kermitResult").show();
    } else if (mspiggy >= 2) {
      // alert("testpig");
      $("#mspiggyResult").show();
    } else if (chef >= 2) {
      // alert("testchef");
      $("#chefResult").show();
    } else {
      // $("#showResult").hide();
      $("#noResult").show()
      // alert("testno");
    }

    // adds a reset button at the end of the quiz.
    $("#btnReset").click(function () {
      location.reload();
    });

});


});