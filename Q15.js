"use strict";
// 15. Changing Guest List: You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite. 
// . Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can't make it. 
// . Modify your list, replacing the name of the guest who can't make it with the name of the new person you are inviting.
// . print a second set of invitation messages, one for each person who is still in your list.
let guestArr = ["Ava", "Stella", "Julie", "Bridget", "Rhys"];
let cannotAttend = "Rhys";
console.log(cannotAttend + " " + "can not make it, for dinner");
let newGuest = "Alex";
guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
guestArr.map((item) => console.log(`Dear ${item}, you are cordially invited to a dinner`));
