/* Cash Register
Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an 
object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if 
cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer 
as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change 
due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
  const changeNeeded = getChangeAmount(price, cash);
  const totalCash = getCashSum(cid);
  const changeArr = getChange(cid, changeNeeded);
  console.log(changeArr)
  return getStatus(changeNeeded, totalCash, cid, changeArr);

  // function getChangeAmount
    // input: price, cash
    // output: number - change
  function getChangeAmount(price, cash) {
    return Number(parseFloat(cash-price).toFixed(2));
  }
  
  // function getCashSum
    // input CID
    // output: number - total cash amount
  function getCashSum(cid) {
    return cid.reduce((acc, curr) => {
      // console.log(`acc: ${acc} + currNum: ${curr[1]} = ${Number(parseFloat(acc + curr[1]).toFixed(2))}`)
      return Number(parseFloat(acc + curr[1]).toFixed(2));
    }, 0)
  }


  // function getChange
    // input: CID, changeNeeded
    // output: arr - change values

  function getChange(cid, changeNeeded) {
    let changeLeftToMake = changeNeeded;
    const changeMade = [
      ['PENNY', 0],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['DOLLAR', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
    ];

    while (changeNeeded > getCashSum(changeMade)) {
      // console.log('\nWHILE LOOP')
      changeLeftToMake = Number(parseFloat(changeNeeded - getCashSum(changeMade)).toFixed(2))
      // console.log('changeNeeded: ', changeNeeded);
      // console.log('changeAmt: ', getCashSum(changeMade));
      // console.log('changeLeftToMake: ', changeLeftToMake);

      if (changeLeftToMake >= 100 && cid[8][1] >= 100) {      //HUNDRED CHECK
        console.log('HUNDRED')
        changeMade[8][1] += 100;
        changeLeftToMake = Number(parseFloat(changeLeftToMake - 100).toFixed(2))
        cid[8][1] -= 100;
        
      } else if (changeLeftToMake >= 20 && cid[7][1] >= 20) {  //TWENTY CHECK
        console.log('TWENTY')
        changeMade[7][1] += 20;
        changeLeftToMake = Number(parseFloat(changeLeftToMake - 20).toFixed(2))
        cid[7][1] -= 20;
        
      } else if (changeLeftToMake >= 10 && cid[6][1] >= 10) {  //TEN CHECK
        console.log('TEN')
        changeMade[6][1] += 10;
        changeLeftToMake = Number(parseFloat(changeLeftToMake - 10).toFixed(2))
        cid[6][1] -= 10;
        
      } else if (changeLeftToMake >= 5 && cid[5][1] >= 5) {  //FIVE CHECK
        console.log('FIVE')
        changeMade[5][1] += 5;
        changeLeftToMake = Number(parseFloat(changeLeftToMake - 5).toFixed(2))
        cid[5][1] -= 5;
        
      } else if (changeLeftToMake >= 1 && cid[4][1] >= 1) {  //ONE CHECK
        console.log('ONE')
        changeMade[4][1] += 1;
        changeLeftToMake = Number(parseFloat(changeLeftToMake - 1).toFixed(2))
        cid[4][1] -= 1;
        
      } else if (changeLeftToMake >= .25 && cid[3][1] >= .25) {  //QUARTER CHECK
        console.log('QUARTER')
        changeMade[3][1] = Number(parseFloat(changeMade[3][1] + .25).toFixed(2));
        changeLeftToMake = Number(parseFloat(changeLeftToMake - .25).toFixed(2))
        cid[3][1] = Number(parseFloat(cid[3][1] - .25).toFixed(2));
        
      } else if (changeLeftToMake >= .10 && cid[2][1] >= .10) {  //DIME CHECK
        console.log('DIME')
        changeMade[2][1] = Number(parseFloat(changeMade[2][1] + .10).toFixed(2));
        changeLeftToMake = Number(parseFloat(changeLeftToMake - .10).toFixed(2))
        cid[2][1] = Number(parseFloat(cid[2][1] - .10).toFixed(2));
        
      } else if (changeLeftToMake >= .05 && cid[1][1] >= .05) {  //NICKEL CHECK
        console.log('NICKEL')
        changeMade[1][1] = Number(parseFloat(changeMade[1][1] + .05).toFixed(2));
        changeLeftToMake = Number(parseFloat(changeLeftToMake - .05).toFixed(2))
        cid[1][1] = Number(parseFloat(cid[1][1] - .05).toFixed(2));
        
      } else if (changeLeftToMake >= .01 && cid[0][1] >= .01) {  //PENNY CHECK
        console.log('PENNY')
        changeMade[0][1] = Number(parseFloat(changeMade[0][1] + .01).toFixed(2));
        changeLeftToMake = Number(parseFloat(changeLeftToMake - .01).toFixed(2))
        cid[0][1] = Number(parseFloat(cid[0][1] - .01).toFixed(2));
      } else {
        return;
      }
    }

    // check for exact change
    let exactChange = true;
    for (let i = 0; i < cid; i++) {
      if (cid[i][1] > 0) {
        exactChange = false;
        break;
      }
    }
    // if each element[1] of cid is 0
      // add element to changeMage
    if (exactChange) {
      changeMade.push('exact change')
    }
    // console.log(changeMade)
    return changeMade
  }
  
  // function getStatus
  // input: change, cash, CID
  // output: object
  function getStatus(change, cash, cid, changeArr) {
    console.log('GET STATUS')
    const hasEnoughChange = Number(parseFloat(cash - change).toFixed(2)) > 0
    const hasExactChange = change[9] !== undefined

    if (!hasEnoughChange) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    if (hasExactChange) {
      return {status: "CLOSED", change: cid};
    } else {
      const outputArr = [];
      console.log(changeArr)
      for (let i = changeArr.length - 1; i >= 0; i--) {
        if (typeof element !== 'string' && changeArr[i][1] > 0) {
          outputArr.push(changeArr[i]);
        }
      }
      // console.log(outputArr)
      return {status: "OPEN", change: outputArr}
    }
  }
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 
// {status: "OPEN", change: [["QUARTER", 0.5]]}.
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
// {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
// {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
