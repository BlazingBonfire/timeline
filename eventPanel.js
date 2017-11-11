var createPanel = function(){
    var panel = new Panel();
    var eventDiv = document.createElement("div");

    var nameInputFieldName = document.createElement("p");
    var yearInputFieldName = document.createElement("p");
    var monthInputFieldName = document.createElement("p");
    var dayInputFieldName = document.createElement("p");
    var descInputFieldName = document.createElement("p");

    nameInputFieldName.appendChild(document.createTextNode("Name:"));
    yearInputFieldName.appendChild(document.createTextNode("Year:"));
    monthInputFieldName.appendChild(document.createTextNode("Month:"));
    dayInputFieldName.appendChild(document.createTextNode("Day:"));
    descInputFieldName.appendChild(document.createTextNode("Description:"));

    eventPanelDiv.appendChild(eventDiv);

    eventDiv.appendChild(document.createElement("br"));
    eventDiv.appendChild(panel.nameButton);
    eventDiv.appendChild(document.createElement("br"));
    eventPanel = panel.eventPanel;
    eventDiv.appendChild(eventPanel);

    eventPanel.appendChild(nameInputFieldName);
    eventPanel.appendChild(panel.nameInputField);
    eventPanel.appendChild(yearInputFieldName);
    eventPanel.appendChild(panel.yearInputField);
    eventPanel.appendChild(monthInputFieldName);
    eventPanel.appendChild(panel.monthInputField);
    eventPanel.appendChild(dayInputFieldName);
    eventPanel.appendChild(panel.dayInputField);
    eventPanel.appendChild(descInputFieldName);
    eventPanel.appendChild(panel.descInputField);

    eventPanel.appendChild(document.createElement("br"));
    eventPanel.appendChild(panel.submitButton);
}

var createNameButton = function() {
    var btn = document.createElement('button');
    btn.innerHTML = 'New Event';
    btn.className += 'big-beautiful-button';

    return btn;
}

var createEventPanel = function(){
    var eventPanel = document.createElement('div');
    eventPanel.className = "event-panel";
    return eventPanel;
}

var createInputField = function(){
    var inputField = document.createElement('input');
    inputField.value = "default";
    return inputField;
}

var createSubmitButton = function() {
    var btn = document.createElement('button');
    btn.innerHTML = 'Submit';

    return btn;
}

class Panel {
    constructor() {
        var self = this;

        var btn = createNameButton();
        btn.addEventListener('click', function(event) {
            self.toggleDetails();
        });
        this.nameButton = btn;

        this.eventPanel = createEventPanel();

        this.nameInputField = createInputField();
        this.nameInputField.value = "New Event";
        this.yearInputField = createInputField();
        this.monthInputField = createInputField();
        this.dayInputField = createInputField();
        this.descInputField = createInputField();

        var btn = createSubmitButton();
        btn.addEventListener('click', function(event) {
            self.changeText();
        });
        this.submitButton = btn;
    }
    changeText() {
        this.nameButton.innerHTML = this.nameInputField.value;
    }
    toggleDetails(){
        var x = this.eventPanel;
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}

var addEventBtn = $('#add-event-button-button')[0];
addEventBtn.addEventListener('click', createPanel);
var eventPanelDiv = $('#event-panel-whole')[0];
