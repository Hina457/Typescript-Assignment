

let guest_list :string [] = ['Hina','Duaa','maria','junaid'];
 //for (let i=0 ; i<guest_list.length; i++){
 //console.log('Respected sir/Madem ' + guest_list [i] + ',\n we invited you on dinner tommorow.\n\nThank you')}

let not_present :string ='junaid';
let new_guest : string ='Ramzan';

guest_list [3]= new_guest;
for (let i=0 ; i<guest_list.length; i++){
    console.log(`Respected sir/Madem ` + guest_list [i] + ',\n we invited you on dinner tommorow.\nThank you\n')}

guest_list.unshift('shaheen','rizwan','sarfaraz');
for (let i=0 ; i<guest_list.length; i++){
    console.log(`Respected sir/Madem ` + guest_list [i] + ',\n we invited you on dinner tommorow. we found big table so we decide to invite 3 more guest.\nThank you\n')}
