if (
  process.env.npm_execpath.indexOf("npm") === -1 &&
  process.env.npm_execpath.indexOf("yarn") === -1
) {
  throw new Error(`

  ###################################################
  #                                                 #
  #  Please use Yarn > 1.3 to install dependencies  #
  #                                                 #
  #  1. Install yarn (https://yarnpkg.com/)         #
  #  2. Run 'yarn'                                  #
  #                                                 #
  ###################################################

  OR

  ###################################################
  #                                                 #
  #  Please use NPM to install dependencies         #
  #                                                 #
  #  1. Install npm (https://npmjs.com/)            #
  #  2. Run 'npm install'                           #
  #                                                 #
  ###################################################
  `);
}
