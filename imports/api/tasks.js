import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({

    });
  });
}

Meteor.methods({
  'tasks.insert'(text,chatter) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: chatter,
      username: chatter,
    });
  },
});