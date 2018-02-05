import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
//    tacos() {
//     return Tacos.find();
//   }
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked

//     instance.counter.set(instance.counter.get() + 1);

//      Meteor.call( 'insertTaco', instance.counter, ( error ) => {
//       if ( error ) {
//         console.log( error );
//       }
//     });

// 	}, 
// });


if(Meteor.isClient){



	Template.text_input.onCreated(function text_input_created() {
	  // counter starts at 0
	  this.text = new ReactiveVar("");
	  this.weight = new ReactiveVar("normal"); 
	  this.style = new ReactiveVar(""); 
	  this.decoration = new ReactiveVar(""); 
	  this.none_set = new ReactiveVar("no font effects active"); 
	  this.size = new ReactiveVar(0); 
	  this.color = new ReactiveVar("black"); 

	});

	Template.text_input.helpers({
	  text() {
	    return Template.instance().text.get();
	  },
	  weight() {
	    return Template.instance().weight.get();
	  },
	  style() {
	    return Template.instance().style.get();
	  },
	  decoration() {
	    return Template.instance().decoration.get();
	  },
	  none_set() {
	    return Template.instance().none_set.get();
	  },
	  size() {
	    return Template.instance().size.get();
	  },
	  getSize: function(){ 
  		return Tacos.find().fetch()[Tacos.find().count()-1];
  	  }, 
  	  color() {
	    return Template.instance().color.get();
	  }, 
	  tacos() {
	    return Tacos.find().fetch();
	  }
	});

	Template.text_input.events({

		'click .bold'(event, instance){

			event.preventDefault();
				console.log(instance.weight.curValue);
			   

			   if(instance.weight.get() != "bold "){ 
			   		instance.none_set.set("what beautiful styling you have!"); 
			   		instance.none_set.curValue = "what beautiful styling you have!";
			   		console.log(instance.none_set);  

			   		instance.weight.set( "bold");
			   	 	instance.weight.curValue = "bold";    
			   		instance.weight.set(instance.weight.get() + " ");
			   		 
			   }
			   else { 
			   		if(instance.decoration.get() != "underline " && instance.style.get() != "italic "){ 
				   		instance.none_set.set("no font effects active"); 
				   		instance.none_set.curValue = "no font effects active";
				   		console.log(instance.none_set); 
				   	} 
			   		instance.weight.curValue = "normal";    
			   		instance.weight.set(instance.weight.get() + " ");
			   		 
			   }

			    // Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				   //    if ( error ) {
				   //      console.log( error );
				   //    }
				   //  });
			   // instance.text.set(instance.text.get() + event.target.text_info.value + " ");
			   return "bold";
	       },
		'click .italic'(event, instance){
			event.preventDefault();
				// console.log(instance.style.curValue);
			 //   instance.style.curValue = "italic";    
			 //   instance.style.set(instance.style.get() + " ");
			 //   console.log(instance.style);
			 //   // instance.text.set(instance.text.get() + event.target.text_info.value + " ");
			 //   return "italic";



			   if(instance.style.get() != "italic "){ 
			   		instance.none_set.set("what beautiful styling you have!"); 
			   		instance.none_set.curValue = "what beautiful styling you have!";
			   		console.log(instance.none_set);  
			   		instance.style.set( "italic");
			   	 	instance.style.curValue = "italic";    
				   instance.style.set(instance.style.get() + " ");
				   console.log(instance.style);
				   // instance.text.set(instance.text.get() + event.target.text_info.value + " ");
			   }
			   else { 
			   		if(instance.weight.get() != "bold " && instance.decoration.get() != "underline "){ 
				   		instance.none_set.set("no font effects active"); 
				   		instance.none_set.curValue = "no font effects active";
				   		console.log(instance.none_set); 
				   	} 
			   		instance.style.curValue = "";    
			   		instance.style.set(instance.style.get() + " ");
			   }
			   // Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				  //     if ( error ) {
				  //       console.log( error );
				  //     }
				  //   });
	       },
		'click .underline'(event, instance){
			event.preventDefault();
				// console.log(instance.decoration.curValue);
			 //   instance.decoration.curValue = "underline";    
			 //   instance.decoration.set(instance.decoration.get() + " ");
			 //   console.log(instance.decoration);
			 //   // instance.text.set(instance.text.get() + event.target.text_info.value + " ");
			 //   return "underline";


			   if(instance.decoration.get() != "underline "){ 
			   		instance.none_set.set("what beautiful styling you have!"); 
			   		instance.none_set.curValue = "what beautiful styling you have!";
			   		console.log(instance.none_set);  
			   		instance.decoration.set( "underline");
			   	 	instance.decoration.curValue = "underline";    
				   instance.decoration.set(instance.decoration.get() + " ");
				   console.log(instance.decoration);
				   // instance.text.set(instance.text.get() + event.target.text_info.value + " ");
			   }
			   else { 
			   		if(instance.weight.get() != "bold " && instance.style.get() != "italic "){ 
				   		instance.none_set.set("no font effects active"); 
				   		instance.none_set.curValue = "no font effects active";
				   		console.log(instance.none_set); 
				   	} 
			   		instance.decoration.curValue = "";    
			   		instance.decoration.set(instance.decoration.get() + " ");
			   }
			   // Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				  //     if ( error ) {
				  //       console.log( error );
				  //     }
				  //   });
	       },

	  'click .red'(event, instance) {
	  	event.preventDefault();

	    if(instance.color.get() != "red") { 
	    	instance.color.set("red"); 
	    } 
	    else { 
	    	instance.color.set("black"); 
	    }

	    console.log(instance.color);
	    // Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				 //      if ( error ) {
				 //        console.log( error );
				 //      }
				 //    });

	  },
	  'click .green'(event, instance) {
	  	event.preventDefault();
	  	if(instance.color.get() != "green") { 
	    	instance.color.set("green"); 
		}	
		else { 
	    	instance.color.set("black"); 
	    } 
	    console.log(instance.color);
	    // Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				 //      if ( error ) {
				 //        console.log( error );
				 //      }
				 //    });

	  },
	  'click .blue'(event, instance) {
	  	event.preventDefault();
	    if(instance.color.get() != "blue") { 
	    	instance.color.set("blue"); 
		}	
		else { 
	    	instance.color.set("black"); 
	    } 

	    console.log(instance.color);
	    // Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				 //      if ( error ) {
				 //        console.log( error );
				 //      }
				 //    });


	  },

	  'keydown input' (event, instance){ 
	  		console.log(instance);
	  		if(event.keyCode == 13 || event.keyCode == 32){ 
	  		console.log(instance);
			// event.preventDefault();
	  			instance.text.set($('#input').val() + " ");
			    console.log(instance.text);
			    Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
				      if ( error ) {
				        console.log( error );
				      }
				    });
			    $('#input').val('');

	  		}




	  },

	  // 'submit form'(event, instance) {
	  // 	event.preventDefault();

	  //       //your code
	    
	  // 	// text = text + event.target.text_info.value;
	  //   // increment the counter when button is clicked
	  //   // instance.text.set(instance.text.get() );

	  //   instance.text.set(event.target.text_info.value + " ");
	  //   console.log(instance.text);
	  //   Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
			// 	      if ( error ) {
			// 	        console.log( error );
			// 	      }
			// 	    });

	  // },

	//   'keypress input': function(event, instance) {
	//   	console.log(instance);
	//     instance.text = event.target.text_info.value + " ";
	//     console.log(instance);
	//     Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text, instance.color,( error ) => {
	// 			      if ( error ) {
	// 			        console.log( error );
	// 			      }
	// 			    });
	// },

	  'click .clear'(event, instance) {

	    if (confirm("Clear all text?")) {
	    	Meteor.call('removeall'); 
	        instance.text.set("");
	       //  Meteor.call( 'insertTaco', instance.weight, instance.style, instance.decoration, instance.text,( error ) => {
				    //   if ( error ) {
				    //     console.log( error );
				    //   }
				    // });

	    } 
	    // document.getElementById("demo").innerHTML = txt;
	    // increment the counter when button is clicked
	    // instance.text.set("");
	    // instance.counter.set(instance.counter.get() + 1);
	  },
	});
} 
