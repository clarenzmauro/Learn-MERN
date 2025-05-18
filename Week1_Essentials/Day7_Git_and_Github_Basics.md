git is simply a version control system. 

it tracks changes and saves snapshots through commits.

you can also create branches as well as go back to your previous commits.

to initialize a repository, use git init

to check status, use git status

.gitignore file just ignore files/folders stated in the file

before you want to commit, you want to let git know what you want to include in the commit.

this is called staging. 

use git add to stage a specific file.

or use git add . to stage all files excluding those indicated in .gitignore

git commit -m "YOUR MESSAGE HERE" commits your files with a message using the -m flag.

git log shows the history of commits.

-

github is simply where you can view your git projects remotely.

to add your local repo to github, you must create a repo there first.

you then should use git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

this will let you push to the repo that you've created.

to push, use this command: git push -u origin main.

-u origin main simply means that the local main branch should track the main branch on origin (github).

you only need to use -u the first time you push a new branch.