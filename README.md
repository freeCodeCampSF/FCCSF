# Welcome to the Free Code Camp San Francisco (FCCSF) Web Project.

The goals of this project are:

1. To gather materials and resources related to free code camp San Francisco.

2. To work on an open source project together.

3. To have a project where we can collaborate and learn together.

# PLEASE READ BEFORE CONTRIBUTING

## How can I help?

Anyone is welcome to fork this project and create pull requests but please follow these guidelines:

1. Please open an issue with details about what you plan to work on before you begin and assign yourself the task so no one does redundant work.

2. Remember to pull from the source BEFORE you begin working to ensure that you have the most recent code and to avoid merge conflicts.

3. Your pull request doesn't have to be a huge alteration to the code. Any little bit helps!

4. Please be specific about what problem you solved in the commit message. Open issues for next steps. 

5. Feel free to contact us with any questions! This is meant as a safe learning experience. 

6. If these steps aren't followed I will likely not be able to merge your pull request. 

## Next Steps

Looking for contribution ideas? Here's our longterm wish list:

1. A blog section: This will be a place where members can post knowledge articles on what they have learned.

2. A member section for members to introduce themselves and share their github/linkedIn info

3. An about page

4. A contact us page with links to the facebook group, meetup page, and slack group

5. Feel free to make smaller changes as well. See a spelling mistake? Everything helps! If you're unsure how to fix something you are also
   welcome to open an issue.

## Getting Started

Here's how to get your local environment set up to start working on this project.

1. Click the "Fork" button in the upper right corner of this repository's page. This makes a copy of the repo to your own account.

2. Make sure that you [have Git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and that you have your [credentials set up](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh). 

3. In your repo, click on the green "Code" button above the list of files and copy the URL there. Run this command in the terminal, pasting in the URL you copied. This clones your Github repo to your local environment (your computer). Make sure you're in the folder (directory) where you want the project to be.
```
git clone <URL to your fork on Github>
```

4. Navigate into the FCCSF project directory.
```
cd FCCSF/
```

5. Add the original freeCodeCampSF repo as a remote. This creates a link from the current repo on your computer to the original freeCodeCampSF one on Github. You can name the remote whatever you want, but it is often called "upstream."
```
git remote add upstream https://github.com/freeCodeCampSF/FCCSF.git
```

6. Verify that the remote was added. This will show each remote with its fetch and push URLs. "Origin" is your fork on Github, which you have access to. "Upstream" is the freeCodeCampSF repo, which you can fetch from but do not have permissions to directly push to.
```
git remote -v
```

7. Before you start making any changes to the code, it's a good idea to fetch from upstream, in case any changes have been made to the main repo. Fetching downloads content from the remote, but it doesn't change the code locally. You will still need to merge the changes (next step). This command brings down all branches in the remote, but you can also fetch a specific branch by adding the branch name at the end.
```
git fetch upstream
```

8. Make sure you're in your local master branch. Merge the changes from upstream's master branch.
```
git checkout master
git merge upstream/master
```

9. Create a new branch from this up-to-date master. Try to use a name that describes what changes you're making. Now you're ready to make changes to the code!
```
git checkout -b <new_branch_name>
```

# Resources

In order to maintain consistency we'd like contributors to consult the following materials when making changes:

1. The freeCodeCamp design style guide https://design-style-guide.freecodecamp.org/

2. The freeCodeCamp Applied Accessability section of the Responsive Design Certificate https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/

# Live Site

View the live site here: https://freecodecampsf.github.io/FCCSF/
