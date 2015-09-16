#!/usr/bin/node

var fs = require("fs");

var data = "";

if(process.argv.length > 2){

  var filters = process.argv[2].split('.');

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
      while(filters.length && filters[0] in data){
        data = data[ filters.splice(0,1) ];
      }

      if(filters.length)
        process.stderr.write("Error: unfound index " + filters[0] + " in gived JSON\n");
      else
        process.stdout.write( JSON.stringify(data, null, '  ') );
    }else
      process.stderr.write("Error: Unvalid gived JSON\n");
  });

}else{
  process.stderr.write("Error: Not given argument to filter\n");
}
