#!/usr/bin/node

var fs = require("fs");

function exitError(code, text){ //Optional (text) code default = 1
  if(text === undefined && typeof code != "number"){
      text = code; code = 1;
  }

  process.stderr.write(text);
  process.stderr.write("\n");
  process.exit(code);

}

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
        data = data[ filters.shift() ];
      }

      if(filters.length)
        exitError("Error: unfound index " + filters[0] + " in gived JSON\n");
      else
        process.stdout.write( JSON.stringify(data, null, '  ') );
    }else
      exitError("Error: Unvalid gived JSON\n");
  });

}else{
  exitError("Error: Not given argument to filter\n");
}
