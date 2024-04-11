var data = [
  {
    id: "0001",
    icon: '<i class="bi bi-asterisk"></i>',
    say: "'I prefer to dance!'",
    info: "This guys has a mustache!",
    image: {
      class: "clickableimg",
      src: " http://127.0.0.1:5501/img/avatar1.png",
      style: "width: 50px;",
    },
  },
  {
    id: "0002",
    icon: '<i class="bi bi-arrow-up-right-square-fill"></i>',
    say: "'Winking is my special trait'",
    info: "This guy has a beard!",
    image: {
      src: "http://127.0.0.1:5501/img/avatar2.png",
      style: "width: 50px;",
      class: "clickableimg",
    },
  },
  {
    id: "0003",
    icon: '<i class="bi bi-arrows-angle-expand"></i>',
    say: "(She is speechless)",
    info: "This woman has red hair!",
    image: {
      src: "http://127.0.0.1:5501/img/avatar3.png",
      style: "width: 50px;",
      class: "clickableimg",
    },
  },
];

function insertDataIntoTable(element, tag) {
  var table = document.getElementById(element);
  var tbody = table.getElementsByTagName(tag)[0];

  function imageObject(src, style, classId) {
    return `<img href='${src}' src='${src}' style='${style}' class='${classId}'>`;
  }

  for (var i = 0; i < data.length; i++) {
    var row = tbody.insertRow(i);
    let keys = Object.keys(data[i]);
    for (var j = 0; j < keys.length; j++) {
      let cell = row.insertCell();
      if (typeof data[i][keys[j]] == typeof {}) {
        cell.innerHTML = imageObject(
          data[i][keys[j]].src,
          data[i][keys[j]].style,
          data[i][keys[j]].class
        );
      } else {
        cell.innerHTML = data[i][keys[j]];
      }
    }
  }
}

insertDataIntoTable("personalTable", "tbody");

$(document).ready(function () {
  $(".clickableimg").click(function () {
    window.open(this.src);
    return false;
  });
});