const Arr = (obj) => {
    let a = [];
    a = Object.entries(obj);
    return a;
  };
  console.log(Arr({ a: 1, b: 2 }));
  