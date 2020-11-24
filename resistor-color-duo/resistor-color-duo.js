//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const decodedValue = (colors) => {

  const colors_code = [];

  if(colors.length > 2){
    colors.pop()
  }

  for (let index = 0; index < colors.length; index++) {
    colors_code.push(COLORS.indexOf(colors[index]))
  }
  
  let code = +(colors_code.join(""));
  return code;

};

export const COLORS = ["black", "brown", "red", "orange",
"yellow", "green", "blue", "violet", "grey", "white"];
