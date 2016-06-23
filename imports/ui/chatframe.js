import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './chatframe.html';

Template.chatframe.onCreated(function chatframeOnCreated() {
    Meteor.subscribe('tasks');
});

Template.chatframe.helpers({
    tasks() {
      // Show newest tasks at the top
    return Tasks.find();
  },
    chatter(){
    return Template.instance().chatter.get();
    },
});

Template.chatframe.events({
    'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log(event);
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Meteor.call('tasks.insert', text, Session.get("chatter"));
 
    // Clear form
    target.text.value = '';
    $('.panel-body').scrollTop($('.media-list').height())
  },
});