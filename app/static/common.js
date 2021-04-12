
urlSong = api + SongPath; // ELB URL
urlBook = api + BookPath; // ELB URL
urlVideo = api + VideoPath; // ELB URL


// ===================================================================
// ===================================================================
// ===================================================================


// POST
function PostBook() {
    // id = $('input.id').val();
    authorname = $('input.book_authorname').val();
    bookname = $('input.bookname').val();
    price = $('input.book_price').val();

    data = {
        'authorname' : authorname,
        'bookname' : bookname,
        'price': price
    };

    $.ajax({
        type: 'POST',
        url: urlBook,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);

        },
        error: function(json) {
            console.log(json);
        }
    });    
}


// POST
function PutBook() {
    
    id = $('input.book_id').val();
    authorname = $('input.book_authorname').val();
    bookname = $('input.bookname').val();
    price = $('input.book_price').val();

    data = {
        'id': id, 
        'authorname' : authorname,
        'bookname' : bookname,
        'price': price
    };

    $.ajax({
        type: 'PUT',
        url: urlBook,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);

        },
        error: function(json) {
            console.log(json);
        }
    });    
}



function DeleteBook() {
    
    id = $('input.book_id').val();

    data = {
        'id': id
    };

    $.ajax({
        type: 'DELETE',
        url: urlBook,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);
        },
        error: function(json) {
            console.log(json);
        }
    });    
}



function GetBook() {

    $.ajax({
        type: 'GET',
        url: urlBook,
        dataType: 'json',
        success: function(json) {
            console.log(json);
            Books = json.Books;
            
            // total = "Total: "+json.Total;
            // $('h3').text(total);

            $.each(Books, function(i, item){
                
                console.log(item.bookname);
                linha = "<tr>"
                            +"<td class='book_id'>"+item.id+"</td>"
                            +"<td>"+item.authorname+"</td>"
                            +"<td>"+item.bookname+"</td>"
                            +"<td>"+item.price+"</td>"
                            +"<td>   <button class='update' book_id='"+item.id+"'    book_authorname='"+item.authorname+"'   bookname='"+item.bookname+"'  book_price='"+item.price+"'  >Atualizar</button>              <button class='delete' book_id='"+item.id+"'    book_authorname='"+item.authorname+"'   bookname='"+item.bookname+"'  book_price='"+item.price+"' >Excluir</button>   </td>"

                        +"</tr>";
                
                $('table#book tbody').append(linha);


            });
        },
        error: function(json) {
            console.log(json);
        }
    });

}

// ===================================================================
// ===================================================================
// ===================================================================

// POST
function PostSong() {
    // id = $('input.id').val();
    authorname = $('input.song_authorname').val();
    songname = $('input.songname').val();
    price = $('input.song_price').val();

    data = {
        'authorname' : authorname,
        'songname' : songname,
        'price': price
    };

    $.ajax({
        type: 'POST',
        url: urlSong,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);

        },
        error: function(json) {
            console.log(json);
        }
    });    
}


// POST
function PutSong() {
    
    id = $('input.song_id').val();
    authorname = $('input.song_authorname').val();
    songname = $('input.songname').val();
    price = $('input.song_price').val();

    data = {
        'id': id, 
        'authorname' : authorname,
        'songname' : songname,
        'price': price
    };

    $.ajax({
        type: 'PUT',
        url: urlSong,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);

        },
        error: function(json) {
            console.log(json);
        }
    });    
}



function DeleteSong() {
    
    id = $('input.song_id').val();

    data = {
        'id': id
    };

    $.ajax({
        type: 'DELETE',
        url: urlSong,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);
        },
        error: function(json) {
            console.log(json);
        }
    });    
}



function GetSong() {

    $.ajax({
        type: 'GET',
        url: urlSong,
        dataType: 'json',
        success: function(json) {
            console.log(json);
            Songs = json.Songs;
            
            // total = "Total: "+json.Total;
            // $('h3').text(total);

            $.each(Songs, function(i, item){
                
                console.log(item.songname);
                linha = "<tr>"
                            +"<td class='song_id'>"+item.id+"</td>"
                            +"<td>"+item.authorname+"</td>"
                            +"<td>"+item.songname+"</td>"
                            +"<td>"+item.price+"</td>"
                            +"<td>   <button class='update' song_id='"+item.id+"'    song_authorname='"+item.authorname+"'   songname='"+item.songname+"'  song_price='"+item.price+"'  >Atualizar</button>              <button class='delete' song_id='"+item.id+"'    song_authorname='"+item.authorname+"'   songname='"+item.songname+"'  song_price='"+item.price+"' >Excluir</button>   </td>"

                        +"</tr>";
                
                $('table#song tbody').append(linha);


            });
        },
        error: function(json) {
            console.log(json);
        }
    });

}

// ===================================================================
// ===================================================================
// ===================================================================



// POST
function PostVideo() {
    // id = $('input.id').val();
    authorname = $('input.video_authorname').val();
    videoname = $('input.videoname').val();
    price = $('input.video_price').val();

    data = {
        'authorname' : authorname,
        'videoname' : videoname,
        'price': price
    };

    $.ajax({
        type: 'POST',
        url: urlVideo,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);

        },
        error: function(json) {
            console.log(json);
        }
    });    
}


// POST
function PutVideo() {
    
    id = $('input.video_id').val();
    authorname = $('input.video_authorname').val();
    songname = $('input.videoname').val();
    price = $('input.video_price').val();

    data = {
        'id': id, 
        'authorname' : authorname,
        'videoname' : videoname,
        'price': price
    };

    $.ajax({
        type: 'PUT',
        url: urlVideo,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);

        },
        error: function(json) {
            console.log(json);
        }
    });    
}



function DeleteVideo() {
    
    id = $('input.video_id').val();

    data = {
        'id': id
    };

    $.ajax({
        type: 'DELETE',
        url: urlVideo,
        data: data,
        dataType: 'json',
        success: function(json) {
            console.log(json);
        },
        error: function(json) {
            console.log(json);
        }
    });    
}



function GetVideo() {

    $.ajax({
        type: 'GET',
        url: urlVideo,
        dataType: 'json',
        success: function(json) {
            console.log(json);
            Videos = json.Videos;
            
            // total = "Total: "+json.Total;
            // $('h3').text(total);

            $.each(Videos, function(i, item){
                
                console.log(item.songname);
                linha = "<tr>"
                            +"<td class='video_id'>"+item.id+"</td>"
                            +"<td>"+item.authorname+"</td>"
                            +"<td>"+item.videoname+"</td>"
                            +"<td>"+item.price+"</td>"
                            +"<td>   <button class='update' video_id='"+item.id+"'    video_authorname='"+item.authorname+"'   videoname='"+item.videoname+"'  video_price='"+item.price+"'  >Atualizar</button>              <button class='delete' video_id='"+item.id+"'    video_authorname='"+item.authorname+"'   videoname='"+item.videoname+"'  video_price='"+item.price+"' >Excluir</button>   </td>"

                        +"</tr>";
                
                $('table#video tbody').append(linha);


            });
        },
        error: function(json) {
            console.log(json);
        }
    });

}

// ===================================================================
// ===================================================================
// ===================================================================




















$(document).ready(function(){
    


    var s = window.screen;
    var width = q.width = s.width;
    var height = q.height = s.height;
    var letters = Array(256).join(1).split('');

    var draw = function () {
      q.getContext('2d').fillStyle='rgba(0,0,0,.05)';
      q.getContext('2d').fillRect(0,0,width,height);
      q.getContext('2d').fillStyle='#0F0';
      letters.map(function(y_pos, index){
        text = String.fromCharCode(3e4+Math.random()*33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
      });
    };
    setInterval(draw, 33);



    GetBook();
    GetSong();
    GetVideo();

    /*
    setInterval(function(){
        GetBook();
    },1000);
    */

    $(document).on('click', 'table#book button.delete', function(e) {

        //do whatever
        console.log($(this).attr("book_id"));
        console.log($(this).attr("book_authorname"));
        console.log($(this).attr("bookname"));
        console.log($(this).attr("book_price"));

        $('input.book_id').val($(this).attr("book_id"));
        $('input.book_authorname').val($(this).attr("book_authorname"));
        $('input.bookname').val($(this).attr("bookname"));
        $('input.book_price').val($(this).attr("book_price"));
        DeleteBook();

    });


    $(document).on('click', 'table#book button.update', function(e) {

        console.log($(this).attr("book_id"));
        console.log($(this).attr("book_authorname"));
        console.log($(this).attr("bookname"));
        console.log($(this).attr("book_price"));

        $('input.book_id').val($(this).attr("book_id"));
        $('input.book_authorname').val($(this).attr("book_authorname"));
        $('input.bookname').val($(this).attr("bookname"));
        $('input.book_price').val($(this).attr("book_price"));
        PutBook();
    });

    $('button#submit-book').click(function(){
        console.log($('input.book_id').val());
        
        if ( $('input.book_id').val()==="" ) {
            console.log("NOVO");
            PostBook();
        } else {
            console.log("ATUALIZAR");
            PutBook();
        }            

    });

















    $(document).on('click', 'table#song button.delete', function(e) {

        //do whatever
        console.log($(this).attr("song_id"));
        console.log($(this).attr("song_authorname"));
        console.log($(this).attr("songname"));
        console.log($(this).attr("song_price"));

        $('input.song_id').val($(this).attr("song_id"));
        $('input.song_authorname').val($(this).attr("song_authorname"));
        $('input.songname').val($(this).attr("songname"));
        $('input.song_price').val($(this).attr("song_price"));
        DeleteSong();

    });


    $(document).on('click', 'table#song button.update', function(e) {

        console.log($(this).attr("song_id"));
        console.log($(this).attr("song_authorname"));
        console.log($(this).attr("songname"));
        console.log($(this).attr("song_price"));

        $('input.song_id').val($(this).attr("song_id"));
        $('input.song_authorname').val($(this).attr("song_authorname"));
        $('input.songname').val($(this).attr("songname"));
        $('input.song_price').val($(this).attr("song_price"));
        PutSong();
    });

    $('button#submit-song').click(function(){
        console.log($('input.song_id').val());
        
        if ( $('input.song_id').val()==="" ) {
            console.log("NOVO");
            PostSong();
        } else {
            console.log("ATUALIZAR");
            PutSong();
        }            

    });













    $(document).on('click', 'table#video button.delete', function(e) {

        //do whatever
        console.log($(this).attr("video_id"));
        console.log($(this).attr("video_authorname"));
        console.log($(this).attr("videoname"));
        console.log($(this).attr("video_price"));

        $('input.video_id').val($(this).attr("video_id"));
        $('input.video_authorname').val($(this).attr("video_authorname"));
        $('input.videoname').val($(this).attr("videoname"));
        $('input.video_price').val($(this).attr("video_price"));
        DeleteVideo();

    });


    $(document).on('click', 'table#video button.update', function(e) {

        console.log($(this).attr("video_id"));
        console.log($(this).attr("video_authorname"));
        console.log($(this).attr("videoname"));
        console.log($(this).attr("video_price"));

        $('input.video_id').val($(this).attr("video_id"));
        $('input.video_authorname').val($(this).attr("video_authorname"));
        $('input.videoname').val($(this).attr("videoname"));
        $('input.video_price').val($(this).attr("video_price"));
        PutVideo();
    });

    $('button#submit-video').click(function(){
        console.log($('input.video_id').val());
        
        if ( $('input.video_id').val()==="" ) {
            console.log("NOVO");
            PostVideo();
        } else {
            console.log("ATUALIZAR");
            PutVideo();
        }            

    });







});
