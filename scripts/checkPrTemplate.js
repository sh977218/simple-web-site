checkPrTemplate();
function checkString(s) {
  console.log(
    "------------------------------------------------------------------"
  );
  console.log("Input string: ".concat(s));
  var regex = new RegExp(/(- \[[ ]\].+)/g);
  var uncompletedTasks = regex.match(s);
  console.log("uncompletedTasks: ".concat(uncompletedTasks));
  console.log(
    "------------------------------------------------------------------"
  );
  process.exit(uncompletedTasks ? 1 : 0);
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
