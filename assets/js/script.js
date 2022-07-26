var rootEl = $('.container')
var timeEl = $('#currentDay');
var saveBtn = $('.savebtn');
var currentTime = moment().format("dddd, MMMM Do");
var currentTimeHr = moment().format("ha");
var hours = [moment("1-1-2027 09:00:00").format("ha"), moment("1-1-2027 10:00:00").format("ha"), moment("1-1-2027 11:00:00").format("ha"), moment("1-1-2027 12:00:00").format("ha"), moment("1-1-2027 13:00:00").format("ha"), moment("1-1-2027 14:00:00").format("ha"), moment("1-1-2027 15:00:00").format("ha"), moment("1-1-2027 16:00:00").format("ha"), moment("1-1-2027 17:00:00").format("ha")];

function writeHourRows() {
    for (let i = 0; i < hours.length; i++) {
        var rowEl = $('<section>');
        var hourDiv = $('<div>');
        var textAreaSection = $('<textarea>');
        var rowBtn = $('<div>');
        var rowBtnImage = $('<img>');

         // Use IF-Then statement to change row color
        if (hours[i] === currentTimeHr) {
            hourRowStyle = "present";
        } else if (hours[i] > currentTimeHr) {
            hourRowStyle = "future";
        } else {
            hourRowStyle = "past";
        }

        console.log(hours[i] + "=" + currentTimeHr + ":" + hourRowStyle);

        // console.log(str);

        // hours[i] < currentTimeHr ? "past" : hours[i] == currentTimeHr ? "present" : "future";

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
        textAreaSection.attr('id', hours[i]);

        // Create Save Button
        rowEl.append(rowBtn);
        rowBtn.attr('class', 'saveBtn');
        rowBtn.attr('data-index', hours[i]);

        // Append Image to Button DIV
        rowBtn.append(rowBtnImage);
        rowBtnImage.attr('src', './assets/images/save.png');
    }
}

rootEl.click(function (event) {
    var element = event.target;

    if (element.matches("img") === true) {
        var index = element.parentElement.getAttribute("data-index");
        var meetingDes = $("#" + index).get(0);
    }
})

timeEl.text(currentTime);
writeHourRows();