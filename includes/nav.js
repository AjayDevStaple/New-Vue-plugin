jQuery(document).ready(function ($) {
    $(document).on("click", ".cstm-url", function () {
        $('.cstm-url').removeClass('active');
        $(this).addClass('active');
    });
})

function printDiv() {
    var divToPrint = document.getElementById('contentToPrint');
    var htmlToPrint = '' +
        '<style type="text/css">' +
        'table th, table td {' +
        'border:1px solid #000;' +
        'padding;0.5em;' +
        '}' +
        '.table-ftr-btn {' +
        'display:none;' +
        '}' +
        '</style>';
    htmlToPrint += divToPrint.outerHTML;
    newWin = window.open("");
    //newWin.document.write("<h3 align='center'>Print Page</h3>");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
}