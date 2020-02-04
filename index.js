const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(a, b){
  return a + b;
})

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});