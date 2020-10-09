1. taking a html ID
2. Jquery vs vanilla JS
3. event handler its listerning for the user
4. argument for this event handler is a callback
5. callback is just a function thats an argument for another function
6. IN JS things dont run in order
7. When the user clicks submit it will trigger the function inside the submit

.submit(callback) {
var formdata = 'form stufff'
callback(formdata)
}

event.preventdefault - its jsut stopping the form from refreshing the apoge

---

## Steps to setup Sinatra API

1. reset our file structure to support sinatra
2. create our sinatra app and ruby model to store the temperature information
3. In our sintra app we want three routes, one to GET the current temerpature and another to POST the new temeprature so the ruby model saves it and we need a route for our webpage.
4. We need to add two functions to our thermostat class in JS - one function to get the current temeprature using jquery AJX request($.get) , 
another function to POST the new temerpature using Jquery AJAX request ($.post)
5. Update our interface to have one new function to update our temeprature by calling the get requestion function we just wrote inside our thermostat JS class
