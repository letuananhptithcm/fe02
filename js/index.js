/* Global variable for shopping cart, using to transfer data from any pages */
var cart = [];

/* Add item to cart */
function addToCart(code) {
    if (cart.indexOf(code) >= 0) {
        cart.splice(cart.indexOf(code), 1);
    } else {
        cart.push(code);
    }

    var cartString = JSON.stringify(cart);

    localStorage.setItem('cart', cartString);
}

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    //level2
    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/671r5',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, title, detailCode) {
        var itemHtml = '<div class="item ' + itemClass + '">' +
            '<div class="image">' +
            // '<a onClick="addToCart(\'' + detailCode + '\')"><img src="../img/19-300x160.jpg"></a>' +
            '<a href="detail.html?code=' + detailCode + '&title=' + title + '"><img src="../img/19-300x160.jpg"></a>' +
            '</div>' +
            '<div class="text">' + title + '</div>' +
            '<p class="author">John Doe <span>July 29th 2017</span></p>' +
            '</div>';

        return itemHtml;
    }

    //lv1
    function onSuccess(posts, a, b) {
        // console.log(posts);
        // console.log(a);
        // console.log(b);
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 2 || i == 5) ? 'last' : '', list[i].title, list[i].detailCode);
        }
        
        $('.content .list').html(html);
    }

    $(".content-header .control.right").mouseover(function () {
        $("body").css("background", "green");

        // setTimeout(function() {
        //     $("body").css("background", "");
        // }, 2000);
    });

    $(".content-header .control.right").mouseout(function () {
        $("body").css("background", "");
        // setTimeout(function() {
        //     $("body").css("background", "");
        // }, 2000);
    });

    /* Get data from localStorage */
    var cartString = localStorage.getItem('cart');
    /* Parse string data to data variable */
    if (cartString) {
        cart = JSON.parse(cartString);
    }
});