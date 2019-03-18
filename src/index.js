/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences) {
  let count = 0;
  let indexArr = [];
  let compareArr = [];
  let triangArrTotal =[];
  let a1;
  let a2;
  let a3;

  if (preferences.length==0) {
    return count;
  }

  for (var i = 0; i<preferences.length; i++) {
    indexArr.push(i+1);
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }

  for (var j = 0; j<preferences.length; j++) {
    a1 = preferences[indexArr[j]-1]; 
    a2 = preferences[a1-1];
    a3 = preferences[a2-1]; 

    compareArr = [j+1, a1, a2];
    compareArr.sort(compareNumeric);

    if (j+1 == a3) {
        if (a1 != a2 && a2 !=a3) {
          triangArrTotal.push(compareArr);
        }       
    }

    function unique(uniqArr) {
      var obj = {};
    
      for (var k = 0; k < uniqArr.length; k++) {
        var str = uniqArr[k];
        obj[str] = true;
      }
    
      return Object.keys(obj);
    }     
  }
  
  return count = unique(triangArrTotal).length;
};