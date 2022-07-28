    var pivot = "pivot";
    var item  = "item" ;
    var privious_id = item+"_0";
    var current_id ;
    var pivots = document.getElementsByClassName(pivot) ;
    var items  = document.getElementsByClassName(item) ;
    var length = pivots.length ;

    function init()
    {
        var i = 0 ;
        for ( i = 0 ; i < length ; i++)
        {
            pivots[i].setAttribute("id",pivot+"_"+i);
            items[i].setAttribute("id",item+"_"+i);
        }
        document.getElementById(item+"_0").style.display  = "block";
    }


    function shift()
    {
        var i = 0 ;
        for( i=0; i < length; i++)
        {
           pivots[i].index = i ;
           items[i].index = i ;
           pivots[i].setAttribute("onclick","target(event)");
        }
    }


    function target(event)
    {
        current_id = item+"_"+event.target.index;
        document.getElementById(privious_id).style.display  = "none" ;
        document.getElementById(current_id).style.display   = "block" ;
        privious_id = current_id ;
    }
    
    init();
    shift();  
