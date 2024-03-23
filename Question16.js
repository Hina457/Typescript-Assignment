var guest_list = ['Hina', 'Duaa', 'maria', 'junaid'];
// for (let i=0 ; i<guest_list.length; i++){
// console.log('Respected sir/Madem ' + guest_list [i] + ',\n we invited you on dinner tommorow.\n\nThank you')}
var not_present = 'junaid';
var new_guest = 'babar azam';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madem ' + guest_list[i] + ',\n we invited you on dinner tommorow.\nThank you\n');
}
guest_list.unshift('shaheen', 'rizwan', 'sarfaraz');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madem ' + guest_list[i] + ',\n we invited you on dinner tommorow. we found big table so we decide to invite 3 more guest.\nThank you\n');
}
