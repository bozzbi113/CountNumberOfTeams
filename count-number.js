function isValidValue(value) {
    return value >= 1 && value <= Math.pow(10, 5);
  }
  
function numTeams(rating) {
    let i = 0,
      j = 1,
      k = 2,
      l = rating.length;
    if (l < 3) {
      return 0;
    }
    if (l < 1 || l > 100) {
      return "Invalidate";
    }
  
    let count = 0;
  
    while (i < l - 2) {
      if (
        !isValidValue(rating[i]) ||
        !isValidValue(rating[j]) ||
        !isValidValue(rating[k])
      ) {
        return "Invalidate";
      }
      if (rating[i] < rating[j] && rating[j] < rating[k]) count++;
      if (rating[i] > rating[j] && rating[j] > rating[k]) count++;
      if (k === l - 1 && j === l - 2) {
        i++;
        j = i + 1;
        k = i + 2;
      } else if (k === l - 1) {
        j++;
        k = j + 1;
      } else k++;
    }
    return count;
}
  
  
  