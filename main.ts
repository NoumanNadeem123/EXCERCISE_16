// Question # 16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of 
//three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//" Add one new guest to the middle of your array. " Use append() to add one new guest to the end of
//your list. " Print a new set of invitation messages, one for each person in your list.
let quest_list : String [] = ['Aliha' , 'Alishma' , 'Fatima' , 'Nouman' , 'Talha'];
//for(let i=0; i<quest_list.length; i++){
  //  console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow.\nThank you\n')
// }
let not_present : String = 'Talha';
let new_quest : String = 'Aysha';
quest_list[5] = new_quest;
for(let i=0; i<quest_list.length; i++){
    console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow.\nThank you\n')
}
quest_list.unshift(`Muhammad Hussain Ali` , `Nouman Nadeem`);
for(let i=0; i<quest_list.length; i++){
    console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow,But we found bigger dinner table so we invite more 3 spacial quest.\nThank you\n')
}