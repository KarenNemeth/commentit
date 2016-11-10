const dbconnect = require('./dbconnect.js');

// exports.string = function(tags){
//     if (tags) {
//         if (tags.search(",") == -1) {
//             return [tags];
//         } else {
//             tags = tags.split(",");
//             tags = tags.map(function(elem){
//                 return elem.trim();
//             });
//             return tags;
//         }
//     } else {
//         return [];
//     }
// };

exports.retrieve = function (){
    return new Promise(function(resolve, reject){
        dbconnect.pgConnect('SELECT * from links').then(function(results){
            resolve(results.rows    );
        }).catch(function(err){
            reject(err);
        });
    });
};

exports.upload = function(req,res){
    return new Promise(function(resolve,reject){
        var tags = req.query.tags;
        if (tags) {
            if (tags.search(",") == -1) {
                req.query.tags = [tags];
            } else {
                tags = tags.split(",");
                req.query.tags = tags.map(function(elem){
                    return elem.trim();
                });
            }
        } else {
            req.query.tags = [];
        }

        var data = req.query;
        //db save stuff
        //need to handle saving the username, once user is handled
        var call = 'INSERT INTO links (url, username, siteName, siteType, headline, description, image, thumbnail, tags)\
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);';
        var params = [data.url, data.username, data.siteName, data.type, data.title, data.description, data.image, data.thumbnail, data.tags];
        dbconnect.pgConnect(call, params).catcht(function(error){
            reject(error);
        }).then(function(){
            resolve();
        });
    });
};
