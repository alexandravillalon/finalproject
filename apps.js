$(document).ready(function(){
  $("#beanie").mouseenter(function() {
    $(this).text("The Beanie");
    $(this).css("text-align", "center");
    $(this).css("font-size", "50px");
  });

  $("#beanie").mouseleave(function() {
    $(this).text("");
  });


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
