// const express = require('express');
// var app = express()
// var server = require('http').createServer(app);
// const fs = require('fs');
// var exec = require('child_process').exec;
// var child;
// var zlib = require('zlib');
// const { upload } = require('wetransfert');
// var url;
// var csvfile = "businessesCollection.csv";
// var zipfile = "businessesCollection.csv.gz";
// //to socketIO
// server.listen(4200, (err) => {
//     if (err) {
//         console.log("disconnected");
//     } else {
//         console.log("connected");
//     }
// });

// //mongoexport out to csv 
// var serviceId = '19', subStatus = true, minCharge = 1
// var findQuery = `"{subCommand: '${serviceId}', subStatus: ${subStatus}, channel1SucceededCharge:{$gte : ${minCharge}}}"`
// mongoExport = `mongoexport --host  192.168.88.254:8081  --db Rakam1 --collection subscribers  --query ${findQuery} --type=csv --out ${csvfile} --fields MSISDN`;
// child = exec(mongoExport, function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     } else {
//         // to compressing the csv file 
//         var gzip = zlib.createGzip();
//         var inp = fs.createReadStream(`${csvfile}`);
//         var out = fs.createWriteStream(`${zipfile}`);
//         inp.pipe(gzip).pipe(out);


        
    
//         const myUpload = upload('java.developer.0000@gmail.com', ['ahmed.it.00001@gmail.com'], [`C:/Users/mohamed/Desktop/Radwa-Export-csv/Server/${zipfile}`], 'csvUploaded', 'en')
//             .on('progress', (progress) => {
//                 console.log('PROGRESS', progress);
//             })
//             .on('end', (end) => {
//                 console.log('END', end);
//             })
//             .on('error', (error) => {
//             console.error('ERROR', error);
//             });
//     }

        
     
        
    
// })


// const myUpload = upload('ahassan@app-corp.com', ['ahmed.it.00001@gmail.com'], [`C:/Users/mohamed/Desktop/Radwa-Export-csv/Server/${zipfile}`], 'csvUploaded', 'en')
        //     .on('progress', (progress) => {
        //         console.log('PROGRESS', progress);
        //     })
        //     .on('end', (end) => {
        //         console.log('END', end);
        //     })
        //     .on('error', (error) => {
        //         console.error('ERROR', error);
        //     });