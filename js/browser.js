var is_ios = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
if(is_ios)    
{
     $('<link rel="stylesheet" type="text/css" href="../css/ios.css">').appendTo("head");
};