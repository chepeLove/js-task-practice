
let classNames = [
  'header','menu','menu-item','menu-item','menu-item','footer','menu','link','link','link','link'
]

// let result = ['link','menu-item','menu','header','footer'] имена должны быть отсортированы по количеству в classNames


let classNamesCount = {}

for (let i = 0; i < classNames.length; i++){
    let current = classNames[i]
   if(classNamesCount[current]){
     classNamesCount[current] +=1
   }else {
     classNamesCount[current] = 1
   }
  console.log(classNamesCount)
  // console.log(Object.keys(classNamesCount))
}

let result = Object.keys(classNamesCount)
  .sort((a,b)=>classNamesCount[b] - classNamesCount[a])
console.log(result)

// let classNamesCount = {}
// let arrayUniq = []
// for (let i = 0; i < classNames.length; i++){
//     let current = classNames[i]
//    if(classNamesCount[current]){
//      classNamesCount[current] +=1
//    }else {
//      classNamesCount[current] = 1
//      arrayUniq.push(current)
//    }
//   console.log(classNamesCount)
//   // console.log(Object.keys(classNamesCount))
// }