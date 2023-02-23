function main(str) {
    if (!str.endsWith(".nft")) {
      return false;
    }
    if (str.includes(".")) {
      var parts = str.split(".");
      if (parts[parts.length - 1] != "nft") {
        return false;
      }
      for (var i = 0; i < parts.length - 1; i++) {
        if (parts[i] != "") {
          return false;
        }
      }
    }
    else{
        str = str + ".nft"
        console.log('string: ',str)
        return true
    }
    return true;
  }
  
  // Example usage
  console.log(main("myfile.nft")); // true
  console.log(main("myfile.crypto")); // false
  console.log(main("myfile..nft")); // false
  console.log(main("myfile.nft.txt")); // false
  console.log(main("surya"));