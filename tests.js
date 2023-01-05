const testBroadcast = () => {
    // Test case for the word "food" (B--B-K---Z)
    setTimeout(() => {
      io.emit("B", {});
      console.log("Sending B");
    }, 0);
  
    setTimeout(() => {
      io.emit("B", {});
      console.log("Sending B");
    }, 300);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 500);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 1000);
  
    // Test case for the word "vomit" (BBKZ)
    setTimeout(() => {
      io.emit("B", {});
      console.log("Sending B");
    }, 1100);
  
    setTimeout(() => {
      io.emit("B", {});
      console.log("Sending B");
    }, 1200);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 1300);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 1400);
  
    // Test case for the word "sleep" (B-K-RKK---ZZZ)
    setTimeout(() => {
      io.emit("B", {});
      console.log("Sending B");
    }, 1500);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 1800);
  
    setTimeout(() => {
      io.emit("R", {});
      console.log("Sending R");
    }, 2100);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 2400);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 2700);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 3600);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 3900);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 4200);
  
    // Test case for the word "sleep" (B-K-RKK---ZZZ)
    setTimeout(() => {
      io.emit("B", {});
      console.log("Sending B");
    }, 1500);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 1800);
  
    setTimeout(() => {
      io.emit("R", {});
      console.log("Sending R");
    }, 2100);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 2400);
  
    setTimeout(() => {
      io.emit("K", {});
      console.log("Sending K");
    }, 2700);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 3600);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 3900);
  
    setTimeout(() => {
      io.emit("Z", {});
      console.log("Sending Z");
    }, 4200);
  };