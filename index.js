function spy(name) {
  return `hello, I am ${name}.`
}
function receivesAFunction(callback) {
  callback()
}
const returnsANamedFunction = () => {
  const fn  = () => 5 + 8;
  return fn;
}
const fn = returnsANamedFunction();
function returnsAnAnonymousFunction(){
  return () =>{
      console.log("Welcome to GeeksforGeeks!");
  };
}