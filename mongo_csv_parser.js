const fs = require('fs');
// Data Start
var data = [
    {
        "_id" : ObjectId("SOME_OBJECT_ID"),
        "dataId" : 000000,
        "data" : {
            "image" : 1022,
            "totalShare" : 889,
            "views" : 0,
            "reactions" : {
              "fun" : 99,
              "sad" : 99,
              "angry" : 99
            },
        },
        "publishDate" : ISODate("2018-11-01T00:00:00.000Z")
    },
    {
        "_id" : ObjectId("SOME_OBJECT_ID"),
        "dataId" : 000001,
        "data" : {
            "image" : 1052,
            "totalShare" : 445,
            "views" : 889,
            "reactions" : {
              "fun" : 34,
              "sad" : 54,
              "angry" : 74
            },
        },
        "publishDate" : ISODate("2018-11-02T00:00:00.000Z")
    }
]
//Data End

//change this line which data you want in the YOUR_CSV_FILE.csv
let csvString = "_id,dataId,image,totalShare,views,fun,sad,angry\n";

//For pass "ObjectId is not defined"  exception
function ObjectId(data){
    return data;
}

//For pass  "ISODate is not defined" exception
function ISODate(data){
    return data;
}

// change this loop which data you want in the YOUR_CSV_FILE.csv
data.forEach(e => {
    csvString +=
      e._id + "," +
      e.dataId + "," +
      e.data.image +","  +
      e.data.totalShare + "," +
      e.data.views + ","+
      e.data.reactions.fun + "," +
      e.data.reactions.sad + "," +
      e.data.reactions.angry + "\n";
});

let date = new Date();
const fileName = `./result_${date.getFullYear()}_${date.getMonth()}_${date.getDay()}.csv`;
fs.writeFile(fileName, csvString, function(err) {
    if(err) {return console.log(err)}
    console.log("The file was saved as =>", fileName);
});
