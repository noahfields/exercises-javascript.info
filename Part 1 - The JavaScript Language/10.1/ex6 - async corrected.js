setTimeout(function() {
  try {

    console.log("Begin try block. Will print.");
    // bad reference
    undefined_variable;
    console.log("End try block. Will not print.");

  } catch (err) {

    console.log("There was an error.");
    console.log(err);

  }
}, 1000);
