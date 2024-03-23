import { log } from "console";


  


let guest_list :string [] = ['Hina','Duaa','maria','junaid'];
 //for (let i=0 ; i<guest_list.length; i++){
 //console.log('Respected sir/Madem ' + guest_list [i] + ',\n we invited you on dinner tommorow.\n\nThank you')}

let not_present :string ='junaid';
let new_guest : string ='Ramzan';

guest_list [3]= new_guest;
//for (let i=0 ; i<guest_list.length; i++){
  //  console.log(`Respected sir/Madem ` + guest_list [i] + ',\n we invited you on dinner tommorow.\nThank you\n')}

guest_list.unshift('shaheen','rizwan','sarfaraz');
//for (let i=0 ; i<guest_list.length; i++){
  //  console.log(`Respected sir/Madem ` + guest_list [i] + ',\n we invited you on dinner tommorow. we found big table so we decide to invite 3 more guest.\nThank you\n')}


  console.log(`\n unfortunately we can not arrange big table, only two people allow.`)
  while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madem.${remove_guest} you are not invited for dinner.`);
  }
  for (let i=0 ; i<guest_list.length; i++){
    console.log(`Respected sir/Madem ` + guest_list [i] + ',\n yes you still invited tommorro on dinner.\nThank you\n')}

    guest_list.slice(0,2)
    console.log(guest_list);
