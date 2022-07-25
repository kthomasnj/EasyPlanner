var rootEl = $('.container')
var timeEl = $('#currentDay');
var saveBtn = $('.savebtn');
var currentTime = moment().format("dddd, MMMM Do");
var currentTimeHr = moment().format("ha");
var hours = [moment.unix(8000000).format("ha"), moment.unix(5500000).format("ha"), moment.unix(1700000).format("ha"), moment.unix(2050000).format("ha"), moment.unix(1450000).format("ha"), moment.unix(7500000).format('ha'), moment.unix(5000000).format('ha'), moment.unix(1200000).format("ha"), moment.unix(9500000).format("ha")];

function writeHourRows () {
    for (let i = 0; i < hours.length; i++) {
        var rowEl = $('<section>');        
        var hourDiv = $('<div>');
        var textAreaSection = $('<textarea>');
        var rowBtn = $('<div>');    
        var rowBtnImage = $('<img>');
        var hourRowStyle = hours[i] < currentTimeHr ? "past" : hours[i] == currentTimeHr ? "present" : "future";

        // Create Row Element
        rootEl.append(rowEl);
        rowEl.attr('class', 'row');

        // Create Hour column
        rowEl.append(hourDiv);
        hourDiv.text(hours[i]);
        hourDiv.attr('class', 'hour');

        // Create Calendar Event Field        
        rowEl.append(textAreaSection);
        textAreaSection.attr('class', hourRowStyle);

        // Create Save Button
        rowEl.append(rowBtn);
        rowBtn.attr('class', 'saveBtn');

        // Append Image to Button DIV
        rowBtn.append(rowBtnImage);
        rowBtnImage.attr('src', './assets/images/save.png');
    }
}

rootEl.click(function () {
    console.log(timeEl);
})

timeEl.text(currentTime);
writeHourRows();