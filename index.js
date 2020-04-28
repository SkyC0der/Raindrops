const convert = (drop) => {
    if (drop % 7 == 0 && drop % 3 == 0 && drop % 5 == 0){
        drip = "PlingPlangPlong";
    }else if (drop % 3 == 0 && drop % 5 == 0){
      drip = "PlingPlang";
    }else if(drop % 7 == 0 && drop % 5 == 0){
      drip = "PlangPlong";
    }else if (drop % 7 == 0 && drop % 3 == 0){
      drip = "PlingPlong";
    }else if (drop % 7 == 0){
      drip = "Plong";
    }else if (drop % 3 == 0){
      drip = "Pling";
    }else if (drop % 5 == 0){
      drip = "Plang";
    }else{
        return drop.toString(10);
    }
    return drip;
  };
  module.exports = convert
