/**
 * Created by pdx-win8user1 on 6/17/2014.
 */

(function(){
    var test = function(x){
        return x + 10;
    };

    globalVars[0] = test(10);
})();