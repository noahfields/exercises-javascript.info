try {
  
  console.log("Begin try block. This won't print.");
  
  //introduce syntax error, script will not parse
  fasdf[[;

  console.log("End block. Will not print.");

} catch (err) {

  console.log("This will not print either.");

}
