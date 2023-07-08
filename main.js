var inputValue = 0;
var prints = $('#input');
var intervEnable = true;
var exeInterv = false;

$(prints).blur(function (e) { 
    e.preventDefault();
    inputValue = prints.val();
});

function start() {
    if (exeInterv == true) {
        return;
    }
    intervEnable = true;
    exeInterv = true;
    var interv = setInterval(() => {
        if (!intervEnable || $(prints).val() == 0) {
            clearInterval(interv);
            exeInterv = false;
            return;
        }
        $(prints).val($(prints).val()-1);
    }, 1000);
}

function restart() {
    intervEnable = false;
    $(prints).val(inputValue);
}

function stop() {
    intervEnable = false;
}
