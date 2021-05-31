var index = 1
var leftpointingarrow = document.getElementById("left");
var rightpointingarrow = document.getElementById("right");

console.log(projects[index-1] + "/" + projects[index-1] + ".html");
console.log(projects[index+1] + "/" + projects[index+1] + ".html");

leftpointingarrow.href =  projects[i-1] + "/" + projects[i-1] + ".html";
rightpointingarrow.href = projects[i+1] + "/" + projects[i+1] + ".html";

for (var i = 0; i < projects.length; i++){
    console.log("HIIIII");
    console.log(projects[i]);
}