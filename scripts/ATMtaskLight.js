//REQUIREMENTS:
// 1. Always deliver the lowest number of possible notes;
// 2. It's possible to get the amount requested with available notes;
// 3. The client balance is infinite;
// 4. Amount of notes is infinite;
// 5. Available notes 100, 50, 20 10
//1. Выдать наименьшее количество банкнот
//2.Предполагаем,что мы всегда можем выдать ту сумму,которую запрашивают
//3. Банковский счет клиента бесконечен
//4.В банкомате бессконечное количество банкнот
//5. Банкноты номиналом 100,50,20,10

function iWantToGet(amountRequired) {
  const availableNotes = [100,50,20,10]
  const result = []
  if(amountRequired > 0){
    for(let i = 0; i < availableNotes.length;i++){
      let note = availableNotes[i]
      while (amountRequired - note >= 0){
        amountRequired -=note
        result.push(note)
      }
    }
  }else {
    console.log('Error')
  }
  return result
}

console.log(iWantToGet(365))