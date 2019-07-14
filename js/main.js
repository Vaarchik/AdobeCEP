var $switchButton = $('#btnSwitch');
var $stopButton = $('.stop');
var $watchButton = $('.watch');
var $blockLog = $('#logBlock');
var timerId;
var dataCurrent = '';

$switchButton.click(function(){
    if( $(this).hasClass('stop') ){
        $(this).toggleClass('stop');
        $(this).toggleClass('watch');
        stopLoadData();
        $(this).text('Watch');
    } else {
        $(this).toggleClass('stop');
        $(this).toggleClass('watch');
        var StorageTimerInterval = $('#intervalBlock').val();
        loadData();
        timerId = setInterval(loadData, StorageTimerInterval);
        $(this).text('Stop');
    }
});

function loadData(){
    var StorageAdress = $('#urlBlock').val();
    $.ajax({
        url: StorageAdress,
        dataType: 'json',
        crossDomain: true,
        success: function (data, textStatus, jqXHR) {
            dataNew = JSON.stringify(data);
            if (dataCurrent !== dataNew){
                $blockLog.text(dataNew);
                dataCurrent = dataNew;
            } else {
                dataCurrent = dataNew;
            }
        }
    });
};

function stopLoadData(){
    clearInterval(timerId);
};