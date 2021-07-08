/*var projects = ["dejavu_project", "recursion_project", "tedx_project", "foodstickers_project"]

function set_arrows(index, leftpointingarrow, rightpointingarrow){
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
}*/

var projects = ["tenniscourt_project", "portrait_project", "phonecase_project", "foodstickers_project", "tedx_project", "recursion_project", "dejavu_project"]
function set_arrows(index, leftpointingarrow, rightpointingarrow) {
    if (index + 1 == projects.length) {
        leftpointingarrow.setAttribute("href", "../" + projects[0] + "/" + projects[0] + ".html");
    } else {
        leftpointingarrow.setAttribute("href", "../" + projects[(index + 1)] + "/" + projects[(index + 1)] + ".html")
    }
    if (index - 1 == -1) {
        console.log(projects.length)
        console.log("../" + projects[projects.length - 1] + "/" + projects[projects.length - 1] + ".html");
        rightpointingarrow.setAttribute("href", "../" + projects[projects.length - 1] + "/" + projects[projects.length - 1] + ".html")
    } else {
        rightpointingarrow.setAttribute("href", "../" + projects[(index - 1)] + "/" + projects[(index - 1)] + ".html")
    }
}