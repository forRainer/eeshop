$(document).ready(function () {
    $("#top").load("top.html");
});

$(document).ready(function () {
    $("#foot").load("footer.html");
});
<!-- 对综合销量等导航按钮点击事件-->
$(document).ready(function () {
    $("#sales_volume").click(function () {
        $(this).css("color","red");
        $("#zonghe").removeAttr("style");
        $("#sale_price").removeAttr("style");
    });

    $("#zonghe").click(function () {
        $(this).css("color","red");
        $("#sales_volume").removeAttr("style");
        $("#sale_price").removeAttr("style");
    });

    $("#sale_price").click(function () {
        $(this).css("color","red");
        $("#zonghe").removeAttr("style");
        $("#sales_volume").removeAttr("style");
    });
});