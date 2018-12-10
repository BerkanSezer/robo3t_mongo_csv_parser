# Mongo CSV parser for using Robo 3T


You can convert your mongo data to CSV format by using NodeJS.

# Requirements

  - NodeJS (don't need library)
  - Your Mongo Query must like:
    ```sh
    db.getCollection("articles").find({
          "publishDate": {
            $gte: ISODate("2018-11-01T00:00:00.000+0000"),
            $lt: ISODate("2018-12-01T00:00:00.000+0000")
          }
        },
        {
          "dataId":1,
          "data":1,
          "publishDate":1
        }).toArray()
    ```

# How to run:
  - Change the ```data``` variable ( must be array type) in **line 3**
  - Be sure any syntax error
  - Change ```csvString``` variabile in **line 38**
  - Change the ```foreach``` loop in **line 51**
  - Run in the Terminal: ``` $ node mongo_csv_parser.js ```
  - You can find your CSV datas in current PATH begin with ```result_[DATE].csv```
  - Enjoy...
