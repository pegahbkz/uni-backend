
//fetch libraries
const express = require("express");
//config server
const app = express()



//routes


//listen at environment valuable port or 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

