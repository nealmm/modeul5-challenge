$('#currentDay').html(moment().format('MMMM Do YYYY'));

$('.time-block').each(function(index) {
    $(this).val(localStorage.getItem('hour' + index));

    if (index + 9 < moment().hour()) {
        $(this).addClass('past');
    }
    else if (index + 9 == moment().hour()) {
        $(this).addClass('present');
    }
    else if (index + 9 > moment().hour()) {
        $(this).addClass('future');
    }
});

$('.saveBtn').each(function(index) {
    $(this).bind('click', () => localStorage.setItem('hour' + index, $('.time-block:eq(' + index + ')').val()));
});