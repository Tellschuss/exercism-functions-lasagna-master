// function cookingStatus(timer, result) {
//     if (timer === 0) {
//         return result = 'Lasagna is done.'
//     }
//     else if (timer === undefined) {
//         return result = 'You forgot to set the timer.'
//     } else {
//         return result = 'Not done, please wait.'
//     }
// }

// cookingStatus(10)
// console.log(cookingStatus())

// function preparationTime(layers, averagePreparationTime) {
//     let preparationTime = layers.length * averagePreparationTime
//     if (preparationTime === undefined) {
//         return averagePreparationTime = 2
//     } return preparationTime
// }
// const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
// console.log(preparationTime(layers, 3))



// function quantities(layers) {
//     let obj = {
//         'noodles': 0,
//         'sauce': 0,
//     }
//     for(let i =0; i < layers.length; i++){
//         if(layers[i] === 'noodles'){
//           obj.noodles+=50;
//         }
//         else if(layers[i] === 'sauce'){
//           obj.sauce+=0.2;
//         }
//       }
//      return obj;


// }
// console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']))



export function cookingStatus (timer, result) {
    if (timer === 0) {
      return result = 'Lasagna is done.'
    }
    else if (timer === undefined) {
      return result = 'You forgot to set the timer.'
    } else {
      return result = 'Not done, please wait.'
    }
  }
  
  export function preparationTime (layers, averagePreparationTime=2){
   return layers.length*averagePreparationTime
  }
  
  export function quantities(layers) {
      let obj = {
          'noodles': 0,
          'sauce': 0,
      }
      for(let i =0; i < layers.length; i++){
          if(layers[i] === 'noodles'){
            obj.noodles+=50;
          }
          else if(layers[i] === 'sauce'){
            obj.sauce+=0.2;
          }
        }
       return obj;}
  
  export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length-1])
  }
  
  export function scaleRecipe (recipeForTwoPortions, countPortions){
    let portion = {}
    for (let i in recipeForTwoPortions){
       portion[i] = (recipeForTwoPortions[i]/2) * countPortions
    }
    return portion
  };
  