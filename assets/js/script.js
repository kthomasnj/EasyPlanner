var rootEl = $('.container')
var timeEl = $('#currentDay');
var currentTime = moment().format("dddd, MMMM Do");
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function writeHourRows () {
    for (let i = 0; i < hours.length; i++) {
        var rowEl = $('<section>');        
        var hourDiv = $('<div>');
        var textAreaSection = $('<textarea>');
        var rowBtn = $('<div>');    
        var rowBtnImage = $('<img>');

        // Create Row Element
        rootEl.append(rowEl);
        rowEl.attr('class', 'row');

        // Create Hour column
        rowEl.append(hourDiv);
        hourDiv.text(hours[i]);
        hourDiv.attr('class', 'hour');

        // Create Calendar Event Field
        rowEl.append(textAreaSection);

        // Create Save Button
        rowEl.append(rowBtn);
        rowBtn.attr('class', 'saveBtn');

        // Append Image to Button DIV
        rowBtn.append(rowBtnImage);
        rowBtnImage.attr('src', './assets/images/save.png');
    }
}

timeEl.text(currentTime);
writeHourRows();