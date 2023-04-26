
//fetch libraries
const express = require("express");
//config server
const app = express()

//listen at environment valuable port or 8080
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

