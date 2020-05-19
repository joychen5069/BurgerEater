//LEFT IN ES5 BECAUSE CONTINUOUS BREAKING IF CHANGED TO ES6

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() =>{
    $(".devour").on("click", (event) => {
      event.preventDefault()
      console.log("clicked devour")
      let id = $(this).data("id");
      let eat = $(this).data("eat");
  
      eat = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eat
      }).then(
        () => {
          console.log("burger is now devoured", eat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("clicked")
  
      let newBurger = {name: $("#ca").val().trim(),
        // devoured: $("[devoured=true]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  