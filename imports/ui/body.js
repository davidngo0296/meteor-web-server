import { Template } from 'meteor/templating'; 
import './body.html';
import './chatframe.js';
import './nameinput.js';
import { Session } from 'meteor/session';


Template.body.onCreated(function bodyOnCreated() {
      Session.set("chatter", "");
});

Template.body.helpers({
    noChatter(){
        return Session.get("chatter") === "";
    }
});

Template.body.events({
  
});


