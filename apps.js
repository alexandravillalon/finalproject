$(document).ready(function(){
  $("#beanie").mouseenter(function() {
    $(this).text("Beanie");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#beanie").mouseleave(function() {
    $(this).text("");
  });

  $("#pastel").mouseenter(function() {
    $(this).text("Pastel Hair");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#pastel").mouseleave(function() {
    $(this).text("");
  });

  $("#bag").mouseenter(function() {
    $(this).text("Social Conscious Bag");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#bag").mouseleave(function() {
    $(this).text("");
  });

  $("#fuji").mouseenter(function() {
    $(this).text("Fujifilm Camera");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#fuji").mouseleave(function() {
    $(this).text("");
  });

  $("#backpack").mouseenter(function() {
    $(this).text("Fjallraven Kanken Backpack");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#backpack").mouseleave(function() {
    $(this).text("");
  });

  $("#emotional").mouseenter(function() {
    $(this).text("Emotional Justification");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#emotional").mouseleave(function() {
    $(this).text("");
  });

  $("#phone").mouseenter(function() {
    $(this).text("IPhone X");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#phone").mouseleave(function() {
    $(this).text("");
  });

  $("#beer").mouseenter(function() {
    $(this).text("Craft Beer");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
    $(this).css("color", "#89608E")
  });

  $("#beer").mouseleave(function() {
    $(this).text("");
  });

function purchase(){
  var quantity= $("#beanie").val();
  console.log(quantity);
  // var total= ($("beanie").val() * 12);
  //
  // $("#total").changeevent(total);
  // $("#total").set(total);

  // if(quantity >20){
  //   console.log("The maximum amount of beanies you can purchse is 20");
  // };
}; 

// $("#purchasebutton").click(purchase);


  function filledin(){
    var firstname =$("#firstName").val();
    var lastname =$("#lastName").val();
    var address =$("#address").val();
    var city =$("#city").val();
    var state =$("#state").val();
    var zipcode= $("#zipCode").val();


    // if(firstname === ""){
    //   alert("First name not filled in");
    // }
    //
    // if(lastname === ""){
    //   alert("Last name not filled in");
    // }
    //
    // if(address === ""){
    //   alert ("Address not filled in");
    // }
    //
    // if(city === ""){
    //   alert ("City not filled in");
    // }
    //
    // if(state === ""){
    //   alert ("State not filled in");
    // }
    //
    // if(zipcode === ""){
    //   alert ("Zip Code not filled in");
    // }

    if (firstname === "" || lastname === "" || address === "" || city === "" || state === "" || zipcode === ""){
      alert ("One or more of the text fields was left blank. Please enter correct information.")
    }

    // if(firstname, lastname, address, city, state, zipcode !== ""){
    //   return;
    // }

    if (firstname !== "" && lastname !== "" && address !== "" && city !== "" && state !== "" && zipcode !== ""){
      document.location.href = "checkout.html";
    }

  }

$("#shipbutton").click(filledin);

});
