let prBody = getPrBody();
checkPrTemplate(prBody);

function checkString(s) {
  console.log(
    "------------------------------------------------------------------"
  );
  console.log("Input string: ".concat(s));
  console.log(
    "------------------------------------------------------------------"
  );
  let checkListRegex = new RegExp(/(- \[.+\].+)/g);
  let checkList = s.match(checkListRegex);
  const tasks = [];
  for (let i = 0; i < checkList.length; i += 2) {
    tasks.push([checkList[i], checkList[i + 1]]);
  }
  let uncompletedTasksRegex = new RegExp(/(- \[[\s+]\].+)/g);
  const uncompletedTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    let uncompletedTask = task.filter((t) => t.match(uncompletedTasksRegex));

    if (uncompletedTask.length === 2) {
      if (uncompletedTask) {
        uncompletedTasks.push(task);
      }
    }
  }
  if (uncompletedTasks.length) {
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
  checkString(prBody);
}

function getPrBody() {
  let argv = process.argv[2];
  if (!argv) {
    process.exit(1);
  } else {
    let argvArray = argv.split("=");
    if (argvArray.length != 2) {
      process.exit(1);
    } else {
      return argvArray[1];
    }
  }
}
