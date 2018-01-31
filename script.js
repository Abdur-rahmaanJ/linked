$(function() {
    $.getJSON( "https://api.myjson.com/bins/a8k1h", function( data ) {
        for(var x in data['COURSES']){
            var d = data['COURSES'][x]['NAME'];
            $('#courses').append("<div class='course'>"+d+"</div>");
        }
        for(var x in data['EXPERIENCE']){
            var d = data['EXPERIENCE'][x]['DESCRIPTION'];
            var img = data['EXPERIENCE'][x]['IMG'];
            var t = data['EXPERIENCE'][x]['TITLE'];
            var c = data['EXPERIENCE'][x]['COMPANY'];
            var c_url = data['EXPERIENCE'][x]['COMPANY_URL'];
            var date = data['EXPERIENCE'][x]['DATE'];
            var t_url = data['EXPERIENCE'][x]['TITLE_URL'];
            $('#experience').append("<div class='exp'>"+
                "<div class='c'><a href="+c_url+">"+c+"</a></div>"+
                "<div><img src="+img+"></div>"+
                "<div>"+date+"</div>"+
                "<div>"+d+"</div>"+
                "<div><a href="+t_url+">see more</a></div>"+
                "</div>");
        }
        for(var x in data['EDUCATION']){
            var d = data['EDUCATION'][x]['DESCRIPTION'];
            var img = data['EDUCATION'][x]['IMG'];
            var url = data['EDUCATION'][x]['URL'];
            var deg = data['EDUCATION'][x]['DEGREE'];
            var date = data['EDUCATION'][x]['DATE'];
            var name = data['EDUCATION'][x]['NAME'];
            $('#edu').append("<div class='exp'>"+
                "<div><img src="+img+"></div>"+
                "<div>"+name+"</div>"+
                "<div>"+d+"</div>"+
                "<div><a href="+url+">see more</a></div>"+
                "<div>"+deg+"</div>"+
                "<div>"+date+"</div>"+
                "</div>");
        }
        for(var x in data['PUBLICATIONS']){
            var name = data['PUBLICATIONS'][x]['NAME'];
            var con = data['PUBLICATIONS'][x]['CONTRIBUTORS'];
            var d = data['PUBLICATIONS'][x]['DESCRIPTION'];
            var date = data['PUBLICATIONS'][x]['DATE'];
            var place = data['PUBLICATIONS'][x]['PLACE'];
            var url = data['PUBLICATIONS'][x]['URL'];
            $('#pubs').append("<div class='exp'>"+
                "<div>"+name+"</div>"+
                "<div>"+con+"</div>"+
                "<div>"+date+"</div>"+
                "<div>"+d+"</div>"+
                "<div><a href="+url+">see more</a></div>"+
                "<div>"+place+"</div>"+
                "</div>");
        }
        for(var x in data['SKILLS']){
            var name = data['SKILLS'][x]['NAME'];
            var url = data['SKILLS'][x]['URL'];
            $('#skills').append("<div class='exp'>"+
                "<div>"+name+"</div>"+
                "<div><a href="+url+">see more</a></div>"+
                "</div>");
        }
        for(var x in data['INTERESTS']){
            var name = data['INTERESTS'][x]['NAME'];
            var url = data['INTERESTS'][x]['URL'];
            $('#interests').append("<div class='exp'>"+
                "<div>"+name+"</div>"+
                "<div><a href="+url+">see more</a></div>"+
                "</div>");
        }
    });
});