const express= require("express");

const app = express();

app.use(express.static('public'));

app.listen(4321, () => {
    console.log("Express server is up on port 4321");
});