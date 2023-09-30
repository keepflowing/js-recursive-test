function fib (num) {
  const arr = [];
  for(let i = 0; i < num; i++) {
    if (i === 0) {arr.push(0)}
    else if (i === 1) {arr.push(1)}
    else {
      arr.push(arr[i-2]+arr[i-1]);
    }
  }
  return arr;
}

function fibRec (num) {
  if (num === 1) {return [0]}
  else if (num === 2) {return [0, 1]}
  else {
    seq = fibRec(num - 1);
    return [...seq, seq[num - 3] + seq[num - 2]]
  }
}

/* const fibArr = fibRec(50);
for (let i in fibArr) {
  document.body.innerHTML += fibArr[i] + '<br>';
} */