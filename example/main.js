$(function(){

   var testCancelTid = null;

   WebCmd.init({
       //pre : 'cmd',
       //waitstr : '[ please wait ...]',
       routes: [{
           regex: /^fetch\s+(\w+)/,
           handler: function(cmd, matchArr, thiz){

               thiz.wait('fetching '+matchArr[1]+'...');

               window.setTimeout(function(){
                   thiz.output('content of a: ...blabla');
                   thiz.newLine();
               }, 1000);
           }
       },{
           regex: /^test\s+cancel/,
           handler: function(cmd, matchArr, thiz){

               thiz.wait("type 'ctrl+c to cancel in 10 seconds...");

               testCancelTid = window.setTimeout(function(){
                   thiz.output('not yet');
                   thiz.newLine();
               }, 10000);
           },
           oncancel: function(){
               window.clearTimeout(testCancelTid);
           }
       },{
           regex: /\;$/,
           handler: function(cmd, matchArr, thiz){
               //console.log(cmd, arr, 2)

               thiz.wait(null);
               window.setTimeout(function(){

                   thiz.output('done');
                   thiz.newLine();
               }, 1000);

               //thiz.output(str,'abc');
               //thiz.newLine('newcmd');
               //thiz.wait();
               //thiz.clear();
               //thiz.cancel();
           }
       }]
   });
});