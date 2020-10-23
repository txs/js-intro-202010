let type = ['梅花','方塊','愛心', '黑桃']
let num = ['A',2,3,4,5,6,7,8,9,10, 'J','Q','K']
let card = []
let users=[[],[],[],[]]

for(let i in type){
    for(let j in num){
        card.push(type[i]+num[j])
    }
}
// for(let i of type){
//     for(let j of num){
//         card.push(i+j)
//     }
// }
// console.log(card.toString());
// console.log(card.length);
// console.log(Math.floor(4*Math.random()));

// Method01: 52 card and pick user one by one

// for(let i of card){
//     let ran = Math.floor(4*Math.random())
//     while(users[ran].length>=13){
//         ran = (ran+1)%users.length
//     }
//     users[ran].push(i)
//     // if(users[ran].length<=13){
//     //     users[ran].push(i)
//     // }else{
//     //     users[(ran+1)%users.length].push(i)
//     // }
// }

// for(let i of users){
//     console.log(i.toString());
// }

// Method02: 52->0 
let i = 0;
while(card.length!=0){
    let ran = Math.floor(card.length*Math.random()) // 在卡片長度中抽一個的 index
    let picked = card.splice(ran,1) // 抽一張卡
    // console.log(picked);
    users[i].push(picked[0]) //把這張卡給使用者
    i = (i+1)%users.length // 讓 i 在 0,1,2,3 做循環
}
for(let i of users){
    console.log(i.toString());
}