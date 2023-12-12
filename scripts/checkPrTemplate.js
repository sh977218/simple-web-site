checkPrTemplate();

function checkString(s) {
  console.log(
    "------------------------------------------------------------------"
  );
  console.log("Input string: ".concat(s));
  console.log(
    "------------------------------------------------------------------"
  );
  var regex = new RegExp(/(- \[[ ]\].+)/g);
  var uncompletedTasks = s.match(regex);
  if (uncompletedTasks) {
    console.log("uncompletedTasks: \n".concat(uncompletedTasks.join("\n")));
    console.log(
      "------------------------------------------------------------------"
    );
    process.exit(1);
  } else {
    process.exit(0);
  }
}

function checkPrTemplate() {
  var argv = process.argv[2];
  if (!argv) {
    process.exit(1);
  } else {
    var argvArray = argv.split("=");
    if (argvArray.length != 2) {
      process.exit(1);
    } else {
      var prTitle = argvArray[1];
      checkString(prTitle);
    }
  }
}
