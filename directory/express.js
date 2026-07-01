import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/about", (req, res) => res.sendFile('/home/vmuser/repos/basic_informational_site/directory/about.html'));
app.get("/contact-me", (req, res) => res.sendFile('/home/vmuser/repos/basic_informational_site/directory/contact-me.html'));
app.get('/{*any}', (req, res) => res.sendFile('/home/vmuser/repos/basic_informational_site/directory/404.html'));



const PORT = 3000;

app.listen(PORT, (error) => {

  if (error) {
    console.log('ERROR!');
    
    // app.get((req, res) => res.sendFile('/home/vmuser/repos/basic_informational_site/directory/404.html'));
  }



  console.log(`My first Express app - listening on port ${PORT}!`);

});
