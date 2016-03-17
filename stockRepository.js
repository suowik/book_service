var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/books';
var collectionPromise = MongoClient
    .connect(url)
    .then(function (db) {
        return db.collection('books');
    });

var findAll = function () {
    return collectionPromise.then(function (collection) {
        return collection.find({}).toArray();
    });
};

var stockUp = function (isbn, count) {
    return collectionPromise.then(function (collection) {
        return collection.updateOne({isbn: isbn}, {isbn: isbn, count: count}, {upsert: true});
    });
};

var findByIsbn = function (isbn) {
    return collectionPromise.then(function (collection) {
        return collection
            .find({isbn: isbn})
            .limit(1)
            .next()
            .then(function (result) {
                if (result !== null) {
                    return result.count;
                }
                return null;
            });
    });
};

module.exports = {
    findAll: findAll,
    stockUp: stockUp,
    findByIsbn: findByIsbn
};