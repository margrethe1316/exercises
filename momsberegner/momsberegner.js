"use strict";
function myFunc(beloeb, moms = 25) {
  const momsBeloeb = beloeb * (moms / 100);
  console.log(beloeb + momsBeloeb);
}

myFunc(100, 25);
