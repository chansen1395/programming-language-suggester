$(document).ready(function () {
  var javaScript = 0;
  var python = 0;
  var cSharp = 0;
  var sql = 0;

  $("#formRadio1").submit(function (event) {
    event.preventDefault();
    // add results hide for reset - note taken at 9:10 am
    $("#formRadio2,#formRadio3,#formRadio4,#formRadio5,#formRadio6,#formRadio7").hide();
    const activity = $("input:radio[name=answer1]:checked").val();
    if (activity === "javaScript") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return javaScript++;
    } else if (activity === "python") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return python++;
    } else if (activity === "cSharp") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return cSharp++;
    } else if (activity === "sql") {
      $("#formRadio1").hide();
      $("#formRadio2").show();
      return sql++;
    } else {
    }
  });

  $("#formRadio2").submit(function (event) {
    event.preventDefault();
    const fear = $("input:radio[name=answer2]:checked").val();
    if (fear === "javaScript") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return javaScript++;
    } else if (fear === "python") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return python++;
    } else if (fear === "cSharp") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return cSharp++;
    } else if (fear === "sql") {
      $("#formRadio2").hide();
      $("#formRadio3").show();
      return sql++;
    } else {
    }
  });

  $("#formRadio3").submit(function (event) {
    event.preventDefault();
    const relax = $("input:radio[name=answer3]:checked").val();
    if (relax === "javaScript") {
      $("#formRadio3").hide();
      $("#formRadio4").show();
      return javaScript++;
    } else if (relax === "python") {
      $("#formRadio3").hide();
      $("#formRadio4").show();
      return python++;
    } else if (relax === "cSharp") {
      $("#formRadio3").hide();
      $("#formRadio4").show();
      return cSharp++;
    } else if (relax === "sql") {
      $("#formRadio3").hide();
      $("#formRadio4").show();
      return sql++;
    } else {
    }
  });

  $("#formRadio4").submit(function (event) {
    event.preventDefault();
    const lang = $("input:radio[name=answer4]:checked").val();
    if (lang === "javaScript") {
      $("#formRadio4").hide();
      $("#formRadio5").show();
      return javaScript++;
    } else if (lang === "python") {
      $("#formRadio4").hide();
      $("#formRadio5").show();
      return python++;
    } else if (lang === "cSharp") {
      $("#formRadio4").hide();
      $("#formRadio5").show();
      return cSharp++;
    } else if (lang === "sql") {
      $("#formRadio4").hide();
      $("#formRadio5").show();
      return sql++;
    } else {
    }
  });

  $("#formRadio5").submit(function (event) {
    event.preventDefault();
    const dnd = $("input:radio[name=answer5]:checked").val();
    if (dnd === "javaScript") {
      $("#formRadio5").hide();
      $("#formRadio6").show();
      return javaScript++;
    } else if (dnd === "python") {
      $("#formRadio5").hide();
      $("#formRadio6").show();
      return python++;
    } else if (dnd === "cSharp") {
      $("#formRadio5").hide();
      $("#formRadio6").show();
      return cSharp++;
    } else if (dnd === "sql") {
      $("#formRadio5").hide();
      $("#formRadio6").show();
      return sql++;
    } else {
    }
  });

  $("#formRadio6").submit(function (event) {
    event.preventDefault();
    const hangOut = $("input:radio[name=answer6]:checked").val();
    if (hangOut === "javaScript") {
      $("#formRadio6").hide();
      $("#formRadio7").show();
      return javaScript++;
    } else if (hangOut === "python") {
      $("#formRadio6").hide();
      $("#formRadio7").show();
      return python++;
    } else if (hangOut === "cSharp") {
      $("#formRadio6").hide();
      $("#formRadio7").show();
      return cSharp++;
    } else if (hangOut === "sql") {
      $("#formRadio6").hide();
      $("#formRadio7").show();
      return sql++;
    } else {
    }
  });





  $("#formRadio7").submit(function (event) {
    event.preventDefault();
    const music = $("input:radio[name=answer7]:checked").val();
    if (music === "javaScript") {
      javaScript++;
      $("#formRadio6").hide();
      // alert(javaScript);
      // alert(python);
      // alert(cSharp);
      // alert(sql);

    } else if (music === "python") {
      python++;
      $("#formRadio6").hide();
      // alert(javaScript);
      // alert(python);
      // alert(cSharp);
      // alert(sql);
    } else if (music === "cSharp") {
      cSharp++;
      $("#formRadio6").hide();
      // Test whether scores are being tabulated
      // alert(javaScript);
      // alert(python);
      // alert(cSharp);   
      // alert(sql);   
    } else if (music === "sql") {
      sql++;
      $("#formRadio6").hide();
      // Test whether scores are being tabulated
      // alert(javaScript);
      // alert(python);
      // alert(cSharp);   
      // alert(sql);   
    } else {
    }
    // Show result section after quiz is finished
    $("#formRadio7").hide();
    $("#showResult,#btnReset").show();

    // Test for a definite high score to show
    if ((javaScript > python) && (javaScript > cSharp) && (javaScript > sql)) {
      $("#javaScriptResult").show();    
    }
    else if ((python > javaScript) && (python > cSharp) && (python > sql)) {
      $("#pythonResult").show();
    }
    else if ((cSharp > javaScript) && (cSharp > python) && (cSharp > sql)) {
      $("#cSharpResult").show();
    }
    else if ((sql > javaScript) && (sql > python) && (sql > cSharp)) {
      $("#sqlResult").show();
    }

    // Two-way tie
    else if (javaScript === 3 && python == 3) {
      $("#javaScriptResult,#pythonResult").show();
    }
    else if (javaScript === 3 && cSharp == 3) {
      $("#javaScriptResult,#cSharpResult").show();
    }
    else if (javaScript === 3 && sql == 3) {
      $("#javaScriptResult,#sqlResult").show();
    }
    else if (python === 3 && cSharp == 3) {
      $("#javaScriptResult,#sqlResult").show();
    }
    else if (python === 3 && sql == 3) {
      $("#javaScriptResult,#sqlResult").show();
    }
    else if (cSharp === 3 && sql == 3) {
      $("#javaScriptResult,#sqlResult").show();
    }

    // Three-way tie & no result
    else if (javaScript === 2 && python == 2 && cSharp == 2){
      $("#javaScriptResult,#pythonResult,#cSharpResult").show();
    }
    else if (javaScript === 2 && python == 2 && sql == 2){
      $("#javaScriptResult,#pythonResult,#sqlResult").show();
    }
    else if (javaScript === 2 && cSharp == 2 && sql == 2){
      $("#javaScriptResult,#cSharpResult#sqlResult").show();
    }
    else if (python === 2 && cSharp == 2 && sql == 2){
      $("#pythonResult#cSharpResult#sqlResult").show();
    } else {
    $("#noResult").show()
  }




    // // Calculate and show Results
    // $("#showResult,#btnReset").show();
    // if (javaScript >= 4) {
    //   // alert("testfrog");
    //   $("#javaScriptResult").show();
    // } else if (python >= 4) {
    //   // alert("testpig");
    //   $("#pythonResult").show();
    // } else if (cSharp >= 4) {
    //   // alert("testcSharp");
    //   $("#cSharpResult").show();
    // } else if (sql >= 4) {
    //   // alert("testcSharp");
    //   $("#cSharpResult").show();
    // } else {
    //   if (javaScript === python) && python ===
    //   // if (javaScript ===)
    //   // $("#showResult").hide();
    //   $("#noResult").show()
    //   // alert("testno");
    // }

    // adds a reset button at the end of the quiz.
    $("#btnReset").click(function () {
    location.reload();
  });

});


});