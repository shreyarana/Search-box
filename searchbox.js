<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
{
  box-sizing: border-box;
}

#box {
  background-position: 10px 15px;
  width: 100%;
  font-size: 15px;
  padding: 10px 20px 10px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#names {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#names li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 13px;
  text-decoration: none;
  font-size: 16px;
  color: black;
  display:block;
}

#names li a:hover:not(.header) {
  background-color: #eee;
}
</style>
</head>
<body>

<h2>Search bar</h2>

<input type="text" id="box" onkeyup="func()" placeholder="Search for names" title="Type the name here">

<ul id="names">
  <li><a href="#">Adele</a></li>
  <li><a href="#">Agnes</a></li>

  <li><a href="#">Billy</a></li>
  <li><a href="#">Bob</a></li>

  <li><a href="#">Calvin</a></li>
  <li><a href="#">Christina</a></li>
  <li><a href="#">Cindy</a></li>
</ul>

<script>
function func() {
    var input, filter,x, y, a, i, text;
    input = document.getElementById("box");
    filter = input.value.toUpperCase();
    x = document.getElementById("names");
    y = x.getElementsByTagName("li");
    for (i = 0; i < y.length; i++) {
        a = y[i].getElementsByTagName("a")[0];
        text = a.textContent || a.innerText;
        if (text.toUpperCase().indexOf(filter) > -1) {
            y[i].style.display = "";
        } else {
            y[i].style.display = "none";
        }
    }
}
</script>

</body>
</html>
