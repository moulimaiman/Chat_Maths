const name = document.getElementById("nam");
var numero , t , messg , h , s , m ;

setTimeout( helpuser , 300 ) ;

function infonameview() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.display = "block";
    naminf.style.opacity = "100%";
    changebackg() ;
    delcancel() ;
    hidoptions() ;
    antiadd() ;
}

function infonamehid() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.opacity = "0%";
    setTimeout(function () {
        naminf.style.display = "none";
    }, 2000);
    hidcreatename() ; 
}

function seeoptions() {
    var optioninfo = document.getElementById("seeoption");
    optioninfo.style.width = "270px";
    optioninfo.style.height = "130px";
    optioninfo.style.padding = "5px";
    optioninfo.style.opacity = "100%";
    var optionlist = document.getElementById("listoptions");
    setTimeout(() => {
        optionlist.style.display = "inline-block";
    }, 900);
    changebackg() ;
    delcancel() ;
}

function hidoptions() {
    var optioninfo = document.getElementById("seeoption");
    optioninfo.style.width = "0px";
    optioninfo.style.height = "0px";
    optioninfo.style.padding = "0px";
    optioninfo.style.opacity = "0%";
    var optionlist = document.getElementById("listoptions");
    optionlist.style.display = "none";
}

function infonameviiiew() {
    var naminf = document.getElementById("nameinfo");
    naminf.style.display = "block";
    naminf.style.opacity = "100%";
    setTimeout(hidoptions, 50);
}

function editbackg() {
    setTimeout(hidoptions, 50);
    var backgedit = document.getElementById("colorbackg");
    backgedit.style.width = "300px";
    backgedit.style.padding = "10px";
    backgedit.style.opacity = "100%";
    document.getElementById("spacechbgd").style.display = "inline-block" ; 
}

function changebackg() {
    document.getElementById("messg").style.background = document.getElementById("backgdcolor").value;
    var backgedit = document.getElementById("colorbackg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("spacechbgd").style.display = "none" ; 
}

function deletemessg() {
    setTimeout(hidoptions, 50);
    var backgedit = document.getElementById("delmessg");
    backgedit.style.width = "300px";
    backgedit.style.padding = "10px";
    backgedit.style.opacity = "100%";
    document.getElementById("spacedelmessg").style.display = "inline-block" ; 
}

function messgdel() {
    document.getElementById("contentmessg").innerHTML = "" ; 
    var timde = document.getElementById("loadingdel") ; 
    timde.style.height = "0px" ; 
    timde.style.opacity = "0%" ; 
    document.getElementById("spaceloadel").style.display = "none" ; 
}

function messgdelsure() {
    var timde = document.getElementById("loadingdel") ; 
    timde.style.height = "30px" ;
    timde.style.opacity = "100%" ; 
    timde.style.padding = "7px" ;
    document.getElementById("spaceloadel").style.display = "inline-block" ; 
    var backgedit = document.getElementById("delmessg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("spacedelmessg").style.display = "none" ;
    t = setTimeout(messgdel,7000) ; 
}

function messgdelcancel() {
    clearTimeout(t) ;
    var timde = document.getElementById("loadingdel") ; 
    timde.style.height = "0px" ; 
    timde.style.opacity = "0%" ; 
    document.getElementById("spaceloadel").style.display = "none" ;  
}

function delcancel() {
    var backgedit = document.getElementById("delmessg");
    backgedit.style.width = "0px";
    backgedit.style.padding = "0px";
    backgedit.style.opacity = "0%";
    document.getElementById("spacedelmessg").style.display = "none" ;
}

function infoproprety() {
    var propretyinfo = document.getElementById("proprety");
    propretyinfo.style.width = "250px";
    propretyinfo.style.height = "40px";
    propretyinfo.style.padding = "5px";
    propretyinfo.style.opacity = "100%";
    document.getElementById("editname").style.display = "block";
    hidcreatename() ;
}

function hidproprety() {
    var propretyinfo = document.getElementById("proprety");
    propretyinfo.style.width = "0px";
    propretyinfo.style.height = "0px";
    propretyinfo.style.padding = "0px";
    propretyinfo.style.opacity = "0%";
    document.getElementById("editname").style.display = "none";
}
var cpt = 0 ;

function createmessg() {
cpt = 1 + cpt ;
    messg = document.getElementById("writemessg").value;
    var mydate = new Date();
    h = mydate.getHours();
    m = mydate.getMinutes();
    s = mydate.getSeconds();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    if (messg == "") { }
    else {
        document.getElementById("contentmessg").innerHTML += "<div class='spacemessg'><div class='messagewrite' id='id"+cpt+"'> <span class='messageread'> " + messg + " </span><br><span class='hour'>" + h + ":" + m + ":" + s + " </span></div><div class='optionspace'> <span class = 'casebutton'>:</span></div></div>";
        document.getElementById("writemessg").value = "";
        document.getElementById("messg").scrollTop = document.getElementById("contentmessg").scrollHeight;
        setTimeout(() => {
            var soulition = eval(messg) ; 
    document.getElementById("contentmessg").innerHTML += "<div class='spacemath'><div></div><div class='messagemath'> <span class='mathread'> " + soulition + " </span><br><span class='hour'>" + h + ":" + m + ":" + s + " </span></div></div>";
    document.getElementById("messg").scrollTop = document.getElementById("contentmessg").scrollHeight;
        }, 2000 );
    }
}

function createmessg1(event) {
    if ( event.keyCode === 13 ) {
        createmessg() ; 
    }
}

function createmessg2() {
    createmessg() ; 
}

function viewoptmessg() {
    document.getElementsByTagName("spaidnum").style.display = "block" ; 
}

function addmessage() {
    var messgadd = document.getElementById("adding");
    var elmntadd = document.getElementById("elemntadd");
    setTimeout(() => {
        elmntadd.style.display = "inline-block";
    }, 1000);
    messgadd.style.height = "200px";
    messgadd.style.width = "300px";
    messgadd.style.opacity = "100%";
}

function antiadd() {
    var messgadd = document.getElementById("adding");
    var elmntadd = document.getElementById("elemntadd");
    elmntadd.style.display = "none";
    messgadd.style.height = "0px";
    messgadd.style.width = "0px";
    messgadd.style.opacity = "0%";
}

function viewdetail() {
    var datainfo = document.getElementById("infodetail");
    datainfo.style.height = "200px";
    datainfo.style.opacity = "100%";
    datainfo.style.padding = "10px";
}

function hidetail() {
    var datainfo = document.getElementById("infodetail");
    datainfo.style.height = "0px";
    datainfo.style.opacity = "0%";
    datainfo.style.padding = "0px";
}

function copiernum() {
    numero = document.getElementById("phoneinfo").value;
}

function namenumberedit() {
    var editnum = document.getElementById("createname");
    editnum.style.width = "270px";
    editnum.style.padding = "10px";
    editnum.style.opacity = "100%";
    document.getElementById("spacecreate").style.display = "inline-block" ; 
}

function hidcreatename() {
    var editnum = document.getElementById("createname");
    editnum.style.width = "0px";
    editnum.style.padding = "0px";
    editnum.style.opacity = "0%";
    document.getElementById("spacecreate").style.display = "none" ; 
}

function editchange() {
    document.getElementById("namepersn").innerHTML = document.getElementById("newname").value;
    document.getElementById("nam").innerHTML = document.getElementById("newname").value;
    document.getElementById("phoneinfo").innerHTML = document.getElementById("newnumber").value;
    hidcreatename() ;
}

/* function math */

function sin(x) {
    return Math.sin(x) ; 
}

function help() {
    helpme = " Welcome : <br>1- Help1 : for math's function .<br>2- Help2 : for other function . " ;
    return helpme ; 
}

function helpuser() {
    var mydate = new Date();
    h = mydate.getHours();
    m = mydate.getMinutes();
    s = mydate.getSeconds();
    if (h < 10) { h = "0" + h; }
    if (m < 10) { m = "0" + m; }
    if (s < 10) { s = "0" + s; }
    document.getElementById("contentmessg").innerHTML += "<div class='spacemath'><div></div><div class='messagemath'> <span class='mathread'> " + help() + " </span><br><span class='hour'>" + h + ":" + m + ":" + s + " </span></div></div>";
    document.getElementById("messg").scrollTop = document.getElementById("contentmessg").scrollHeight;
}

function help1() {
    helpme = " Function Defined : <br> - cos(x) . <br> -  sin(x) . <br> - tan(x) . <br> - ln(x) . <br> - log(x) . <br> - exp(x) . <br> - rac(x) . <br> - E(x) . <br> - fact(n) . <br> - abs(x) . <br> - pgcd(a,b) . <br> - mod(a,b) . " ;
    return helpme ;
}
function help2() {
     helpme = " Other Function : <br> / * n of N*  */ <br> - EdmN(n) . <br> - Prime(n) . <br> - prmft(n) . <br> - IntegralPn( a , b , deg , ai ) . <br> - detmatrix2(a,b,c,d) . <br> - detmatrix3(a,b,c,d,e,f,g,h,i) . <br> - ESoulition(a,b,c) . <br> - Sumpui(x,n) . <br> - Prdpui(x,n) . <br> - SMatr(matrix1,matrix2) . <br> - BSystem(n) . <br> - Total(notes[],coff[]) . " ;
     return helpme ;  
}

function suppmessgdel() {
    var d = document.getElementById("suppmesdel") ;
    d.innerHTML = " Thanks " ;
}

function supprimmessg() {
    delll = "<div id = 'suppmesdel'> Delete Message : <br>Are You Sure For Deleting The Content Message ? <br> <input type ='button' value ='Yes' onclick ='messgdel()' >     <input type='button' value = 'No' onclick='suppmessgdel()'> </div>" ; 
    return delll ; 
}

var Delmessage = supprimmessg() ; 
var Help = help()
var Help1 = help1() ;
var Help2 = help2() ; 

    function cos(x) {
       var f = Math.cos(x) ; 
       return f ; 
     }
     function sin(x) {
       var f = Math.sin(x) ; 
       return f ; 
     }
     function tan(x) {
       var f = Math.tan(x) ; 
       return f ; 
     }
     function ln(x) {
       var f = Math.log(x) ; 
       return f ; 
     }
     function log(x) {
       var f = Math.log10(x) ; 
       return f ; 
     }
     function exp(x) {
       var f = Math.exp(x) ; 
       return f ; 
     }
     function rac(x) {
       var f = Math.sqrt(x) ; 
       return f ; 
     }
     function p() {
         var p = Math.PI ;
         return p 
     }
     function E(x) {
         return Math.floor(x) ;
     }
     var pi = p() ; 
     
     function fact(x) {
         var n = 1 ; 
         for( var i = 1 ; i <= x ; i++ ) {
             var n = n*i ; 
         }
         return n 
     }
     
     function abs(x) {
         if ( x <= 0 ) {
             var y = -x ; 
         }
         else {
             var y = x ; 
         }
         return y   
     }
     
     function prmft(m) {

    if ( m == 1 ) { 
    return "* 2^0 * 3**0 * 5**0 * ...."  
    }
    else  {
    var z = "" ;
    var n = 0 ;
    var h = 1 ; 
    for ( var x = 2 ; x <= m ; x++) {
       if ( h == m ) {
           break ; 
       }
       var s = 0 ; 
       for ( var i = 2 ; i*i <= x ; i++) {
           if (x%i == 0 ) {
               var s = s + 1;
               break ; 
           }
        }
        if ( s == 0 && m%x == 0 ) {    
                var w = " * " + x  ; 
                var c = m ; 
                while (c%x == 0) {
                   var c = c/x ; 
                   var n = n+1 ;  
                   h = h*x ; 
                }
                if (n == 1) {
                  var z = z + w ;  
                }
                else {
                var v = "**" + n ; 
                var z = z + w + v ; 
                }
                var n = 0 ;
        }
    }
    return z 
    }
    }
    
    function EdmN(a) {
        
    if ( a == 0 ) {
        var z = "!!" ;
        return z 
    }
    else { 
    var ar = [] ;
    for ( var x = 2 ; x <= a ; x++ ) {
        var s1 = 0 ; 
        for ( var i = 2 ; i <= x**0.5 ; i++ ) {
            if ( x%i == 0 ) {
                var s1 = s1 + 1 ; 
            }
        }
        if ( s1 == 0 ) {
            ar.push(x) ; 
        }
        else {
            for ( var j = 2 ; j <= x ; j++) {
                var s2 = 0 ; 
           for ( var p = 2 ; p <= j**0.5 ; p++ ) {
                    if ( j%p == 0 ) {
                        var s2 = s2 + 1 ; 
                    }
                }
                if ( s2 == 0 ) {
              for ( var n = 2 ; n <= 15 ; n++ ) {
                        if ( x == j**n ) {
                            ar.push(j) ; 
                        }
                    }
                }
            }
        }
    }
    var v = " " + 1 ; 
    for ( var k = 2 ; k <= a ; k++ ) {
        var m = 0 ; 
 for ( var i = 0 ; i <= ar.length -(-10) ; i++ ) {
            if ( k == ar[i] ) {
                var m = m -(-1) ; 
            }
        }
        if ( m > 1 ) {
            var v = v + " * " + k + "**" + m ; 
        }
        else {
            if ( m == 1 ) {
                var v = v + " * " + k ; 
            }
            else  {
                var v = v + "" ; 
            }
        } 
    }
    return v + " "
    }
    }   
    
    function pgcd(a,b)  {
        while ( b > 0 ) {
           
           var r = a%b ; 
           var a = b ; 
           var b = r ; 
       }
       return a 
    }
    
    function mod(a,b) {
        var z = a%b ; 
        return z 
    }
    function detmatrix2(a,b,c,d) {
        var d = a*d - b*c ;
        return d 
    }
    function detmatrix3(a,b,c,d,e,f,g,h,i) {
        var d = (a*( e*i - h*f)) - (b*( d*i - g*f)) -(-c*( d*h -g*e )) ;
        return d 
    }
    function Sumpui(x,n) {
       var m = 1 ; 
       var s = 0 ; 
       for (var i = 1 ; i <= x ; i++ ) {
           for ( var j = 1 ; j <= n ; j++ ) {
               var m = m*i ; 
           }
           var s = s + m ; 
           var m = 1 ; 
       }
          return s 
    }
    function Prdpui(x,n) {
       var m = 1 ; 
       var s = 1 ; 
       for (var i = 1 ; i <= x ; i++ ) {
           for ( var j = 1 ; j <= n ; j++ ) {
               var m = m*i ; 
           }
           var s = s * m ; 
           var m = 1 ; 
       }
          return s 
    }
    function SMatr(ar1 , ar2) {
        var arr = [] ;
        for( var i = 0 ; i <= ar1.length - 1 ; i++) {
            var x = ar1[i] + ar2[i] ;
            arr.push(x) ;
        }
        return "[" + arr + "]"
    }
    function ESoulition(a,b,c) {
        if ( a != 0 ) {
        var d = b**2 - 4*a*c ; 
        if ( d == 0 ) {
            var x1 = -b/(2*a) ; 
      return " S = { " + x1 + " } " ;   
        }
        else {
            if ( d > 0 ) {
                var x1 = (-b - d**(1/2))/(2*a) ;
                var x2 = (-b + d**(1/2))/(2*a) ; 
      return " S = { " + x1 + " ; " + x2 + " } " ;
            }
            else {
                var x1 = "No Soulition" ;
      return " S = { " + x1 +  " } "
            }
        }
        }
        else  {
            var x1 = -c/b ; 
            return " S = { " + x1 + " } " ; 
        }   
    }
    function Prime(x) {
    var s = 0 ; 
       for (var i = 2 ; i <= x**0.5 ; i++) {
           if (x%i == 0) {
             var  s = s + 1 ;
           }
       }
       if ( s != 0 ) {
           return x + " : Non Prime Number "  
       }  
       else {
           return x + " : Prime Number "
       }
    }
    function BSystem(n) {
           var  z = "" ;
           var t = n ;
           while (n != 0) {
               if ( n%2 == 0 )  {
                   var n = n/2 ;
                   var z = z + 0 ;  
               }
               else  { 
                   var n = (n-1)/2 ; 
                   var z = z + 1 ; 
               }        
          }
          return z + " = [2]" + t ;
    }
    function Total(note , co) {
       var s = 0 ; 
       var n = 0 ;
    for ( var i = 0 ; i <= note.length - 1 ; i++ ) {
        var x = note[i]*co[i] ;
        var s = s + x ; 
        var n = n + co[i] ;
    }
    var d = s/n ; 
    return d ;
    }
    
    function IntegralPn( a , b , deg , ai ) {
    var an = 1;
    var bn = 1;
    var Fa = 0;
    var Fb = 0;
    for (var i = 0; i <= deg; i++) {
        var an = an * a;
        var bn = bn * b;
        var Fa = Fa - (- (ai[i] / (i + 1)) * an);
        var Fb = Fb - (- (ai[i] / (i + 1)) * bn);
    }
   return 'Integral : ' + ( Fb - Fa ) ;
}


   