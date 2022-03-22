function check(a, x) {
    var isPresent = false;
    for (let i = 0; i < a.length; i++) {
      a[i] == x ? isPresent = true : 0;
    }
      return isPresent;
  }