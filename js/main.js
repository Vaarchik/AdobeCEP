var $switchButton = $('#btnSwitch');
var $stopButton = $('.stop');
var $watchButton = $('.watch');
var $blockLog = $('#logBlock');
var timerId;
var classChecked = $switchButton.className;

$switchButton.click(function(){
    var classChecked = $(this).attr("class");
    if( $(this).hasClass('stop') ){
        $switchButton.toggleClass('stop');
        $switchButton.toggleClass('watch');
        stopLoadData();
    } else {
        $switchButton.toggleClass('stop');
        $switchButton.toggleClass('watch');
        var StorageTimerInterval = $('#intervalBlock').val();
        loadData();
        timerId = setInterval(loadData, StorageTimerInterval);
    }
});

function loadData(){
    var StorageAdress = $('#urlBlock').val();
    $.ajax({
        url: StorageAdress,
        dataType: 'json',
        success: function (data) {
            data = JSON.stringify(data);
            $blockLog.text(data);
        }
    });
};

function stopLoadData(){
    clearInterval(timerId);
};