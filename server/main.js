import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  // code to run on server at startup
});

Meteor.methods({
  insertTaco( weight, style, decoration, text, color ) {
    Tacos.insert( { weight: weight, style:style, decoration:decoration, text:text, color: color } );

  }, 
  // removeAllPosts: function() {

  //       return Tacos.update({});

  //    }, 
  getSize: function(){ 
  		return Tacos.find().fetch()[Tacos.find().count()-1];
  	}, 
    
   removeall: function(){ 
      Tacos.remove({}); 
    } 
});