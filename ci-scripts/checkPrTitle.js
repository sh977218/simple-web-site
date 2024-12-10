checkPrTitle();
function checkString(s) {
  console.log(
    '------------------------------------------------------------------',
  );
  console.log('Input string: '.concat(s));
  let regex = new RegExp(
    /(\b(feat|fix|bug|docs|chore|refactor|test)\b(\((.)*\))*:).*/,
  );
  let regexResult = regex.test(s);
  console.log('regexResult: '.concat(regexResult));
  console.log(
    '------------------------------------------------------------------',
  );
  process.exit(regexResult ? 0 : 1);
}
function checkPrTitle() {
  let argv = process.argv[2];
  if (!argv) {
    process.exit(1);
  } else {
    let argvArray = argv.split('=');
    if (argvArray.length != 2) {
      process.exit(1);
    } else {
      let prTitle = argvArray[1];
      checkString(prTitle);
    }
  }
}
