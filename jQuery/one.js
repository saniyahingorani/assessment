
    var now = new Date();
    var dname = now.getDay();
    var mo = now.getMonth();
    var dnum = now.getDate();
    var yr = now.getFullYear();

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "date", "year"];

    document.getElementById("dayname").innerHTML = week[dname];
    document.getElementById("month").innerHTML = month[mo];
    document.getElementById("dat").innerHTML = dnum;
    document.getElementById("year").innerHTML = yr;
    setInterval(() => {
      var date = new Date();
      var hour = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var ap;
      if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
      }
      if (hour >= 0 && hour <= 11) {
        ap = "AM";
      }
      else {
        ap = "PM";
      }
      document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + ap;
    }, 1000);
