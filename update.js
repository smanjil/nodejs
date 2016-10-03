/**
 * Created by ano on 10/2/16.
 */

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/fruits';

MongoClient.connect(url, function(err, db){
    if(err){
        console.log(err);
    }
    else{
        console.log('Connected to: ' + url);

        var collection = db.collection('apples');

        var doc1 = {name: 'red apples', color: 'red'};
        var doc2 = {name: 'green apples', color: 'green'};

        collection.update({'name': 'red apples'}, {$set: {'color': 'blue'}}, function(err, respose){
           if(err){
               console.log(err);
           }
           else{
               console.log('Update Successful!!!');
           }
           db.close();
        });
    }
});