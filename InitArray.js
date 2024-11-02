function start() {
  var n1 = new Array(5);
  var n2 = new Array();

  for (var i = 0; i < n1.length; ++i) {
    n1[i] = i;
  }

  for (var i = 0; i < 5; ++i) {
    n2[i] = i + 1;
  }

  outputArray("Array n1:", n1, document.getElementById("output1"));
  outputArray("Array n2:", n2, document.getElementById("output2"));
}

function outputArray(heading, theArray, output) {
  var content = `<h2>${heading}</h2>
                   <table>
                       <thead>
                           <tr><th>Index</th><th>Value</th></tr>
                       </thead>
                       <tbody>`;

  for (var i = 0; i < theArray.length; ++i) {
    content += `<tr><td>${i}</td><td>${theArray[i]}</td></tr>`;
  }

  content += `</tbody></table>`;
  output.innerHTML = content;
}

window.addEventListener("load", start, false);
