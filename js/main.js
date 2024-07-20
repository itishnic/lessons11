// function showThis() {
//     console.log("this in showThis: ", this);
//   }
  
//   // Вызываем в глобальном контексте
//   showThis(); // this in showThis: Window
  
//   const user = {
//     username: "Mango",
//   };
  
//   // Записываем ссылку на функцию в свойство объекта
//   // Обратите внимание, что это не вызов - нет ()
//   user.showContext = showThis;
  
//   // Вызываем функцию в контексте объекта
//   // this будет указывать на текущий объект, в контексте
//   // которого осуществляется вызов, а не на глобальный объект.
//   user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}


  const showThis = () => {
    console.log("this in showThis: ",this);
  };
  
  showThis(); // this in showThis: window
  
  const user = {
    username: "Mango",
  };
  user.showContext = showThis;
  
  user.showContext(); // this in showThis: window





//   function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}.`);
//   }
  
//   const mango = {
//     username: "Манго",
//   };
//   const poly = {
//     username: "Поли",
//   };
  
//   greetGuest.call(mango, "Добро пожаловать",); // Добро пожаловать, Манго.
//   greetGuest.call(poly, "С приездом"); // С приездом, Поли.

function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}.`);
  }
  
  const mango = {
    username: "Манго",
  };
  const poly = {
    username: "Поли",
  };
  
  greetGuest.apply(mango, ["Добро пожаловать","1234"]); // Добро пожаловать, Манго.
  greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.