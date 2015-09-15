#!/usr/bin/node

var fs = require("fs");

var data = "";

if(process.argv.length > 2){

  if(process.argv.length == 4){
    var inStream = fs.createReadStream( process.argv[3] );
  } else {
    var inStream = process.stdin;
  }

  inStream.setEncoding('utf8');

  inStream.on('data', function(chunk){
    data += chunk;
  });

  inStream.on('end', function(){
    data = JSON.parse(data);
    if(data){
      data = data[ process.argv["2"] ];
      process.stdout.write( JSON.stringify(data, null, '  ') );
    }else
      process.stderr.write("Error: Unvalid gived JSON");
  });

}else{
  process.stderr.write("Error: Not given attribute to filter");
}
