function past(h, m, s){
    s *= 1000;
    m *= 60 * 1000;
    h *= 60 * 60 * 1000;
    return (h + m + s);
    
    }
  