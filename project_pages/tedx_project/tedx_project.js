var index = 2
var leftpointingarrow = document.getElementById("left");
var rightpointingarrow = document.getElementById("right");
var num_projects = projects.length;

if (index-1 == -1) {
    leftpointingarrow.setAttribute("href", "../" + projects[projects.length-1] + "/" + projects[projects.length-1] + ".html")
} else {
    leftpointingarrow.setAttribute("href", "../" + projects[(index-1)] + "/" + projects[(index-1)] + ".html")
}

if (index+1 == projects.length) {
    rightpointingarrow.setAttribute("href", "../" + projects[0] + "/" + projects[0] + ".html")
} else {
    rightpointingarrow.setAttribute("href", "../" + projects[(index+1)] + "/" + projects[(index+1)] + ".html")
}