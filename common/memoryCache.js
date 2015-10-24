/*jslint node: true */
"use strict";

var cacheManager = require("cache-manager");
var cacheManagerCaching;

var memoryCache = {
    dbWrapper: function (id, persistToDb, req, callback, cachingOptions) {
        if (!cachingOptions) {
            cachingOptions = { store: "memory", max: 100, ttl: 10/*seconds*/ };
        }
        if (!cacheManagerCaching) {
            cacheManagerCaching = cacheManager.caching(cachingOptions);
        }

        cacheManagerCaching.get(id, function (err, result) {
            if (err) {
                console.log("MemoryCache Get error with id=" + id + ": " + err);
            }

            if (result) {
                return callback(result);
            }

            persistToDb(req, function (docs) {
                cacheManagerCaching.set(id, docs, function (err) {
                    if (err) {
                        console.log("MemoryCache Set error with id=" + id + ": " + err);
                    }
                });
                callback(docs);
            });
        });
    }
};

module.exports = memoryCache;