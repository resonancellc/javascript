function allowDrop()
{
	var grids = document.querySelectorAll('.grids');
	var i = 0;
	while (i < grids.length)
	{
		var g = grids[i++];
		g.addEventListener('dragover', dragOver, false);
	}
}

function dragOver(e)
{
	e.preventDefault();
	e.dataTransfer.dropEffect = "move";
}
