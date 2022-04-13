# instructions

- clone git repo using command below

```bash
git clone https://github.com/sabbir-dcy/react-demo-template.git
```

- go to directory

```bash
cd react-demo-template
```

- install modules using npm

```bash
npm install
```

- check current remote address (optional step)

```bash
git remote -v
```

you will see <code>:originhttps://github.com/sabbir-dcy/react-demo-template.git </code>

- remove current .git remote address

```bash
rmdir .git
```

press <code>A</code> (for yes to all) then press <code>Enter</code>

- write command below

```bash
git remote -v
```

you will see something like this
<code>fatal: not a git repository (or any of the parent directories): .git </code>

- now initialize git again

```bash
git init
```

- follow these steps only if you want to store the project on github

```bash
git add .
git commit -m "first commit"
git branch -M main
git remote add origin #YOUR_REPO_URL
git push -u origin main
```
done! you can change your project name inside <code>package.json</code> file and <code>index.html</code> file
## included modules

- react router v6

## html/jsx

- removed react demo content
- added a simple intro text

## css

- added few global style for simlicity
- font added 'inter' non-italic variants (300-800 weight)
- inputs and buttons will have same font size and family as other element in the site
- container (optional) class, div will be centered maintaining 70% width of the page
- initial margin and padding is 0px giving the freedom of customization.
- anchor tag text decoration set to none and text black
- input field padding and border changes.

## other

- you will find some file has been excluded inside .vscode>settings.json, this file are just hidden from your project folder. not deleted.
- by removing .vscode folder or setting the values to <code>false</code> you can see those files inside project folder again.

## folder structure

```
├───src
│   ├───components
│   ├───hooks
│   ├───pages
│   │   ├───Home
│   │   └───Shared
│   │       ├───Footer
│   │       └───Header
│   ├───App.js
│   ├───App.css
│   └───index.js
│
│
└───README.md
```
