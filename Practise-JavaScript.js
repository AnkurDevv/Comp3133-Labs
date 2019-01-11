


  // Task 1 : Captitalize the first word of each and every letter in the String 

    function toUpper(str){
      var splitStr = str.toLowerCase().split(' ');  // declaring an array which stores the word of the string 
      for (var i=0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    }

    
                                                            // Check output here 

console.log(toUpper(" I am a little tea pot"));



  

                                                            // Check output here

