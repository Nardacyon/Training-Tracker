const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workouts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
});