function getGeoLocation(){
  navigator.geolocation.getCurrentPosition(position => {
  alert("位置情報の取得に成功しました");
  var status = "";
  for (var prop in position.coords) {
    status += prop + ": " + position.coords[prop] + "<br>";
  }
  status += "<a href='http://maps.google.co.jp/?q="
    + position.coords.latitude + "," 
    + position.coords.longitude 
    + "' target='blank'>GoogleMapで現在地を表示する</a><br>";
  document.getElementById("statusArea").innerHTML = status;
  });
  }
  
  var failureFunc = function(err){
  var errCause = "";
  switch(err.code) {
    case err.TIMEOUT:
      errCause = 'Timeout';
      break;
    case err.POSITION_UNAVAILABLE:
      errCause = 'Position unavailable';
      break;
    case err.PERMISSION_DENIED:
      errCause = 'Permission denied';
      break;
    case err.UNKNOWN_ERROR:
      errCause = 'Unknown error';
      break;
  }
  alert("位置情報取得に失敗しました。"
    + "原因: " + errCause + " " + err.message);
  }