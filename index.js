#!/usr/bin/node

process.stdin.setEncoding('utf8');

var data = "";

if(process.argv.length > 2){

  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      process.stdout.write('data: ' + chunk);
    }
  });

  process.stdin.on('data', function(chunk){
    data += chunk;
  });

  process.stdin.on('end', function(){
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
