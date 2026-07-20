## This PR fixes...
- This PR adds a workflow file that adds automatic checking for if code in a branch is formatted according to Prettier rules (these appear in the .prettierrc file) and automatic application of Prettier for branches during pull requests using autofix. 
- This PR uses the Husky library to automatically apply Prettier rules to code when you commit the code. 

## What I did...
- I created a .prettierrc file, a .prettierignore file (for telling Prettier which files or directories to avoid applying its rules to), and initialized a Husky project and added commands in the pre-commit file in the .husky directory to call the prettier write command as a pre-commit hook. 
- I created the prettier.yml workflow file and added two jobs to the file. 
- - The autofix job applies to non-feature branches in the case of a pull request, and it runs the prettier check command. If that prettier check fails, then it will run the prettier write command and automatically add a new commit with the reformatted code using the autofix app.
- - The prettier job applies to pull request events (for the main branch) and for push events and simply runs the prettier check command.
- - These jobs exist under the assumption that every branch going forward will have the Prettier and Husky files and the code will therefore be automatically formatted pre-commit, but I wanted the security of confirming that these are in fact being applied in time for pushes to the repo or for pull requests. 
## How to test...

Here is the set of steps for testing, with check boxes for clarification: 

- Git pull or git fetch `ashleystringer/TEST-add-prettier-formatter` and switch to this branch.
- Initialize the Husky project with the following code in terminal/command line: 
`npx husky init`
- Find the `.husky/pre-commit` file in the branch and delete everything in the file add paste the following code:
`npm run prettier`
`git update-index --again`
`exit 1`
- Make a commit using `git commit -m "test"` because of `exit 1` in the pre-commit file, this prevents a commit from actually being performed while still allowing the pre-commit hook in Husky to run. 
- *Remove* `exit 1` from the `.husky/pre-commit` file
- *Change* `"prepare": "husky"` in `package.json` to `"prepare": "husky || true"`
- Make a commit using `git commit -m "test"` again. Because `exit 1` is now removed, this will be a real commit for the branch.
- Push the code to `ashleystringer/TEST-add-prettier-formatter` on the repo. This will trigger the `prettier` job in the workflow file. 
- Make a pull request for the `ashleystringer/TEST-add-prettier-formatter` branch. This will trigger the `autofix` job in the workflow file. **Please do not merge this pull request into any branch. This is for testing purposes only.**



***Tests checklist***

- *Test 1* - Does Husky automatically apply Prettier formatting when the command `git commit -m "test"` is run?  [ ] 
- *Test 2* - Does the code in `ashleystringer/TEST-add-prettier-formatter` pass the `prettier` job in the `prettier.yml` workflow file upon a `push` event? [ ]
- *Test 3* - Does the code in `ashleystringer/TEST-add-prettier-formatter` pass the `autofix` job in the `prettier.yml` workflow file upon a `pull_request` event? [ ]
