var $switchButton = $('#btnSwitch');
var $stopButton = $('.stop');
var $watchButton = $('.watch');
var $blockLog = $('#logBlock');
var timerId;
var classChecked = $switchButton.className;
var dataCurrent = '';

$switchButton.click(function(){
    if( $(this).hasClass('stop') ){
        $switchButton.toggleClass('stop');
        $switchButton.toggleClass('watch');
        stopLoadData();
        $(this).text('Stop');
        $switchButton.text('Watch');
    } else {
        $switchButton.toggleClass('stop');
        $switchButton.toggleClass('watch');
        var StorageTimerInterval = $('#intervalBlock').val();
        loadData();
        timerId = setInterval(loadData, StorageTimerInterval);
        $switchButton.text('Stop');
    }
});

function loadData(){
    var StorageAdress = $('#urlBlock').val();
    $.ajax({
        url: StorageAdress,
        dataType: 'json',
        success: function (data) {
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