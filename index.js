const shell = require("shelljs");

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.exec("git add .");
  shell.exec('git commit -m "fixed build errors"');
  shell.exec("git push origin main");
  shell.echo("Successfully pushed to github repo!");
  shell.exit(1);
}