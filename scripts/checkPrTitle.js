checkPrTitle();
function checkString(s) {
  console.log(
    "------------------------------------------------------------------"
  );
  console.log("Input string: ".concat(s));
  var regex = new RegExp(/^(\b(feat|fix|bug|docs|chore)\b:)\s(.)*/);
  var regexResult = regex.test(s);
  console.log("regexResult: ".concat(regexResult));
  console.log(
    "------------------------------------------------------------------"
  );
  process.exit(regexResult ? 0 : 1);
}
function checkPrTitle() {
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
