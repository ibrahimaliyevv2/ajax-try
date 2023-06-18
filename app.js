document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpRequest

  const xhr = new XMLHttpRequest();

  xhr.onprogress = function () {
    console.log("Process is going", this.status, this.readyState);
  };

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  //   xhr.onreadystatechange = function () {
  //     // console.log(this.readyState);
  //     // console.log(this.status);

  //     if ((this.status == 200) & (this.readyState == 4)) {
  //       // Response hazır
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.open("GET", "example.txt", true);

  xhr.send();
});
