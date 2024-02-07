//try...catch works synchronously

try {
  console.log("Begin try block. This will print.");

  setTimeout(function() {
    //throw reference error
    not_a_variable;
  }, 1000);

  console.log("End try block. This will print, followed by an error.");
} catch (err) {
  
  console.log("This will not print.");
  
}
