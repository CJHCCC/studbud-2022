(function () {
  // Used to record the date. When it is displayed, it is displayed according to the year and month of the date in dateObj.

  var dateObj = (function () {
    var _date = new Date();    // default systeam time 
    return {
      getDate: function () {
        return _date;
      },
      setDate: function (date) {
        _date = date;
      }
    };
  })();

  renderHtml();

  showCalendarData();

  bindEvent();

  // render Html
  function renderHtml() {
    var calendar = document.getElementById("calendar");
    var titleBox = document.createElement("div");
    var bodyBox = document.createElement("div");

    // Give it a classname
    titleBox.className = 'calendar-title-box';
    titleBox.innerHTML = "<span class='prev-month' id='preMonth'></span>" +
      "<span class='calendar-title' id='calendarTitle'></span>" +
      "<span class='next-month' id='nextMonth'></span>";
    // add calendar to div
    calendar.appendChild(titleBox);

    // set day names monday to sunday
    bodyBox.className = 'calendar-body-box';
    var _headHtml = "<tr>" +
      "<th>Su</th>" +
      "<th>Mo</th>" +
      "<th>Tu</th>" +
      "<th>We</th>" +
      "<th>Th</th>" +
      "<th>Fr</th>" +
      "<th>Sa</th>" +
      "</tr>";
    var _bodyHtml = "";

    // Logic 31days need 6 line
    for (var i = 0; i < 6; i++) {
      _bodyHtml += "<tr>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "</tr>";
    }
    bodyBox.innerHTML = "<table id='calendarTable' class='calendar-table'>" +
      _headHtml + _bodyHtml +
      "</table>";
    calendar.appendChild(bodyBox);
  }


  // display date in form
  function showCalendarData() {
    var _year = dateObj.getDate().getFullYear();
    var _month = dateObj.getDate().getMonth() + 1;
    var _dateStr = getDateStr(dateObj.getDate());

    // Set year and month
    var calendarTitle = document.getElementById("calendarTitle");
    var titleStr = _dateStr.substr(0, 4) + "Y." + _dateStr.substr(4, 2) + "M.";
    calendarTitle.innerText = titleStr;

    // Set days
    var tablee = document.getElementById("calendarTable");
    var tdss = tablee.getElementsByTagName("td");
    var firstDay = new Date(_year, _month - 1, 1);
    for (var i = 0; i < tdss.length; i++) {
      var _thisDay = new Date(_year, _month - 1, i + 1 - firstDay.getDay());
      var _thisDayStr = getDateStr(_thisDay);
      tdss[i].innerText = _thisDay.getDate();
      tdss[i].data = _thisDayStr;
      tdss[i].setAttribute('data', _thisDayStr);

      taskListArray = document.getElementById("tasklist");
      console.log(taskListArray.getDay);
      if (taskListArray.dueDate == tdss[i].data) {
        tdss[i].style.borderBottom = "1px dashed red";
        renderHtml();
      }
      // today
      if (_thisDayStr == getDateStr(new Date())) {
        tdss[i].className = 'currentDay';
      }
      // current month
      else if (_thisDayStr.substr(0, 6) == getDateStr(firstDay).substr(0, 6)) {
        tdss[i].className = 'currentMonth';
      }
      // other month
      else {
        tdss[i].className = 'otherMonth';
      }
    }
  }


  /**
   * to click last and next month
   */
  function bindEvent() {
    var preMonth = document.getElementById("preMonth");
    var nextMonth = document.getElementById("nextMonth");
    addEvent(preMonth, 'click', toPrevMonth);
    addEvent(nextMonth, 'click', toNextMonth);

    var table = document.getElementById("calendarTable");
    var tds = table.getElementsByTagName('td');
    for (var i = 0; i < tds.length; i++) {
      addEvent(tds[i], 'click', (e) => {
        for (var j = 0; j < tds.length; j++) {
          tds[j].classList.remove('clickMonth');
        }
        e.target.classList.add('clickMonth');
        console.log(e.target.getAttribute('data'));
      });
    }
  }

  /**
   * Add Event
   */
  function addEvent(dom, eType, func) {
    if (dom.addEventListener) {
      dom.addEventListener(eType, function (e) {
        func(e);
      });
    } else if (dom.attachEvent) {
      dom.attachEvent('on' + eType, function (e) {
        func(e);
      });
    } else {
      dom['on' + eType] = function (e) {
        func(e);
      }
    }
  }

  /**
   * last month button
   */
  function toPrevMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    showCalendarData();
  }

  /**
   * Next month button
   */
  function toNextMonth() {
    var date = dateObj.getDate();
    dateObj.setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    showCalendarData();
  }

  function toAddTask() {

  }

  /**
   * render date
   */
  function getDateStr(date) {
    var _year = date.getFullYear();
    // strat from 0
    var _month = date.getMonth() + 1;
    var _d = date.getDate();

    _month = (_month > 9) ? ("" + _month) : ("0" + _month);
    _d = (_d > 9) ? ("" + _d) : ("0" + _d);
    return _year + _month + _d;
  }
})();

