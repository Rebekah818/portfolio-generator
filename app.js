const profileDataArgs = process.argv.slice(2,process.argv.length);

const [name, github] = profileDataArgs;
    Name: ${name}
    Github: ${githubName}  

// create arrow function
const generatePage = (name, github) => {
  return`
  <!DOCTYPE html>
  <html lang="en">
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};
console.log(generatePage(name, github));
console.log(generatePage('Jane', 'janehub'));


