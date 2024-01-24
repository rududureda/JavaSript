////Destitojo pvz:
// global scope - pasiekiamas visur mano kode
// function scope - pasiekiamas tik funkcijos viduje: let, const, var
// block scope - pasiekiamas tik bloko viduje (if, ciklai): let, const

const printName = () => {
    if (true) {
      globalName = 'global name'; // jis pasiekiamas visur
      var functionName = 'function name'; // jis pasiekiamas funkcijos viduje
      let myName = 'scope name'; // jis pasiekiamas tik block scope viduje
      console.log(myName);
    }
  
    console.log(functionName);
  };
  
  printName();
  console.log(globalName);
  
  let myName = 'global scope name';
  
  function nameScope() {
    let myName = 'function scope name';
    if (true) {
      let myName = 'block scope name';
      console.log(myName);
    }
    console.log(myName);
  }
  console.log(myName);
  nameScope();