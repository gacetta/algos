let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
	setTimeout(()=>{
    const element = database[id];
    callback(element);
  }, 0);
}

function storeData(data) {
  dataReceived = data;
  console.log(dataReceived);
}

ajaxSimulate(1, storeData);