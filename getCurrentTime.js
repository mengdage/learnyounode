module.exports = getCurrentTime;

// Return the current time in the format YYYY-MM-DD hh:mm
function paddingZero(data, len) {
  // default len to 2
  len = len || 2;
  var padding = (new Array(len+1)).join('0'),
      data = padding + data;
  return data.slice(data.length-len);
}
function getCurrentTime() {
  var cur = new Date();

  var Y = paddingZero(cur.getFullYear(), 4),
      M = paddingZero(cur.getMonth()+1, 2),
      D = paddingZero(cur.getDate(), 2),
      h = paddingZero(cur.getHours(), 2),
      m = paddingZero(cur.getMinutes(), 2);
  return Y+'-'+M+'-'+D+' '+h+':'+m;
}
