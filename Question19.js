var myfriends = ["ali", "Raza", "Ahmed", "Aslam", "imran"];
console.log(" I am inviting ".concat(myfriends.length, " number of friend to my dinner  which are following\n"));
for (var i = 0; i < myfriends.length; i++) {
    console.log("".concat(i + 1, ".").concat(myfriends[i]));
}
