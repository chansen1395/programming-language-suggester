// Custom scripts
$(document).ready(function () {
  
  // Declare variables for each score.
  var javaScript = 0;
  var python = 0;
  var cSharp = 0;
  var sql = 0;

  // Receives quiz responses for 7 questions and hides the previous question.
  $("#formRadio1").submit(function (event) {
    event.preventDefault();

    const activity = $("input:radio[name=answer1]:checked").val();
    if (activity === "javaScript") {
      $("#formRadio1").hide();
      $("#formRadio2").fadeIn();
      return javaScript++;
    } else if (activity === "python") {
      $("#formRadio1").hide();
      $("#formRadio2").fadeIn();
      return python++;
    } else if (activity === "cSharp") {
      $("#formRadio1").hide();
      $("#formRadio2").fadeIn();
      return cSharp++;
    } else if (activity === "sql") {
      $("#formRadio1").hide();
      $("#formRadio2").fadeIn();
      return sql++;
    } else {
    }
  });

  $("#formRadio2").submit(function (event) {
    event.preventDefault();
    const fear = $("input:radio[name=answer2]:checked").val();
    if (fear === "javaScript") {
      $("#formRadio2").hide();
      $("#formRadio3").fadeIn();
      return javaScript++;
    } else if (fear === "python") {
      $("#formRadio2").hide();
      $("#formRadio3").fadeIn();
      return python++;
    } else if (fear === "cSharp") {
      $("#formRadio2").hide();
      $("#formRadio3").fadeIn();
      return cSharp++;
    } else if (fear === "sql") {
      $("#formRadio2").hide();
      $("#formRadio3").fadeIn();
      return sql++;
    } else {
    }
  });

  $("#formRadio3").submit(function (event) {
    event.preventDefault();
    const relax = $("input:radio[name=answer3]:checked").val();
    if (relax === "javaScript") {
      $("#formRadio3").hide();
      $("#formRadio4").fadeIn();
      return javaScript++;
    } else if (relax === "python") {
      $("#formRadio3").hide();
      $("#formRadio4").fadeIn();
      return python++;
    } else if (relax === "cSharp") {
      $("#formRadio3").hide();
      $("#formRadio4").fadeIn();
      return cSharp++;
    } else if (relax === "sql") {
      $("#formRadio3").hide();
      $("#formRadio4").fadeIn();
      return sql++;
    } else {
    }
  });

  $("#formRadio4").submit(function (event) {
    event.preventDefault();
    const lang = $("input:radio[name=answer4]:checked").val();
    if (lang === "javaScript") {
      $("#formRadio4").hide();
      $("#formRadio5").fadeIn();
      return javaScript++;
    } else if (lang === "python") {
      $("#formRadio4").hide();
      $("#formRadio5").fadeIn();
      return python++;
    } else if (lang === "cSharp") {
      $("#formRadio4").hide();
      $("#formRadio5").fadeIn();
      return cSharp++;
    } else if (lang === "sql") {
      $("#formRadio4").hide();
      $("#formRadio5").fadeIn();
      return sql++;
    } else {
    }
  });

  $("#formRadio5").submit(function (event) {
    event.preventDefault();
    const dnd = $("input:radio[name=answer5]:checked").val();
    if (dnd === "javaScript") {
      $("#formRadio5").hide();
      $("#formRadio6").fadeIn();
      return javaScript++;
    } else if (dnd === "python") {
      $("#formRadio5").hide();
      $("#formRadio6").fadeIn();
      return python++;
    } else if (dnd === "cSharp") {
      $("#formRadio5").hide();
      $("#formRadio6").fadeIn();
      return cSharp++;
    } else if (dnd === "sql") {
      $("#formRadio5").hide();
      $("#formRadio6").fadeIn();
      return sql++;
    } else {
    }
  });

  $("#formRadio6").submit(function (event) {
    event.preventDefault();
    const hangOut = $("input:radio[name=answer6]:checked").val();
    if (hangOut === "javaScript") {
      $("#formRadio6").hide();
      $("#formRadio7").fadeIn();
      return javaScript++;
    } else if (hangOut === "python") {
      $("#formRadio6").hide();
      $("#formRadio7").fadeIn();
      return python++;
    } else if (hangOut === "cSharp") {
      $("#formRadio6").hide();
      $("#formRadio7").fadeIn();
      return cSharp++;
    } else if (hangOut === "sql") {
      $("#formRadio6").hide();
      $("#formRadio7").fadeIn();
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
    } else if (music === "python") {
      python++;
      $("#formRadio6").hide();
    } else if (music === "cSharp") {
      cSharp++;
      $("#formRadio6").hide();
    } else if (music === "sql") {
      sql++;
      $("#formRadio6").hide();
    } else {
    }

    // Show result section after quiz is finished
    $("#formRadio7").hide();
    $("#showResult,#btnReset").fadeIn();

    // Test for a definite high score to fadeIn
    if ((javaScript > python) && (javaScript > cSharp) && (javaScript > sql)) {
      $("#javaScriptResult").fadeIn();
    }
    else if ((python > javaScript) && (python > cSharp) && (python > sql)) {
      $("#pythonResult").fadeIn();
    }
    else if ((cSharp > javaScript) && (cSharp > python) && (cSharp > sql)) {
      $("#cSharpResult").fadeIn();
    }
    else if ((sql > javaScript) && (sql > python) && (sql > cSharp)) {
      $("#sqlResult").fadeIn();
    }

    // Two-way tie
    else if (javaScript === 3 && python === 3) {
      $("#javaScriptResult,#pythonResult").fadeIn();
    }
    else if (javaScript === 3 && cSharp === 3) {
      $("#javaScriptResult,#cSharpResult").fadeIn();
    }
    else if (javaScript === 3 && sql === 3) {
      $("#javaScriptResult,#sqlResult").fadeIn();
    }
    else if (python === 3 && cSharp === 3) {
      $("#pythonResult,#cSharpResult").fadeIn();
    }
    else if (python === 3 && sql === 3) {
      $("#pythonResult,#sqlResult").fadeIn();
    }
    else if (cSharp === 3 && sql === 3) {
      $("#cSharpResult,#sqlResult").fadeIn();
    }

    // Three-way tie & no result
    else if (javaScript === 2 && python === 2 && cSharp === 2) {
      $("#javaScriptResult,#pythonResult,#cSharpResult").fadeIn();
    }
    else if (javaScript === 2 && python === 2 && sql === 2) {
      $("#javaScriptResult,#pythonResult,#sqlResult").fadeIn();
    }
    else if (javaScript === 2 && cSharp === 2 && sql === 2) {
      $("#javaScriptResult,#cSharpResult,#sqlResult").fadeIn();
    }
    else if (python === 2 && cSharp === 2 && sql === 2) {
      $("#pythonResult,#cSharpResult,#sqlResult").fadeIn();
    } else {
    $("#noResult").fadeIn();
    }

    // adds a reset button at the end of the quiz.
    $("#btnReset").click(function () {
    location.reload();
  });

});


});