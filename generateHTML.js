"use strict";

function createGridStatic(gridclass)
{
  console.log(gridclass);
	var container = document.getElementById("container");
	var numgridclass=gridclass.length;
	for (var y=0; y < numgridclass; y++)
	{
		var gridelement = document.createElement("div");
		gridelement.className = "grids "+ gridclass[y];
		container.appendChild(gridelement);
		gridelement.setAttribute("draggable", "true");
	}
}

createGridStatic(["menu","profile","timer","clock","company","search","messaging","calculator","contact","assets","events","month","rapid","day","week"]);
