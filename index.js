const {dockStart,dock} = require("@nlpjs/basic");


(async () => {
    await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    let result = await nlp.process("who are you ?");
    console.log(result);
    let result2 = await nlp.process("Nereden geliyorsun? ");
    console.log(result2);
})();

const express = require("express");
const app = express();
const port = 5500;

// app.use(express.static("./front-end/index.html"));

app.listen(port, () => {
  console.log(`Front-end app is running at http://localhost:${port}`);
});