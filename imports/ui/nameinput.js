import { Template } from 'meteor/templating';
import './nameinput.html';


Template.nameinput.helpers({

});

Template.nameinput.events({
   'submit .new-name'(event) {
    // Prevent default browser form submit
    event.preventDefault();

 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    Session.set("chatter", text);
  
  },
});