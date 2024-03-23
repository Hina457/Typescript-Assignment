var guest_list = ['Hina', 'Duaa', 'maria', 'junaid'];
var not_present = 'junaid';
var new_guest = 'babar azam';
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/Madem ' + guest_list[i] + ',\n we invited you on dinner tommorow.\n\nThank you');
}
console.log("Mr. ".concat(not_present, " will not coming tommorrow dinner."));
