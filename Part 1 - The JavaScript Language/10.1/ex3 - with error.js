try {

  console.log("Start try block");

  //Throw a reference error
  SomeVar;

  console.log("End of try block. Won't print");

} catch (err) {
  
  console.log("This will print");

}
