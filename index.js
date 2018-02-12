function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  var nowServing = "";
  if (katzDeliLine.length > 0) {
    nowServing = katzDeliLine[0];
    katzDeliLine.shift();
  } else {
    nowServing = "There is nobody waiting to be served!"
  }
  return nowServing;
}