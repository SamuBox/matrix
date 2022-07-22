var lienzo = document.querySelector("canvas");
const width = lienzo.width
const height = lienzo.height
const cols = 4;
const rows = 5;
const squareSize = width / cols;

if(cols%2==1 && rows%2==1)
    alert("two odds numbers cant have pairs")

var context = lienzo.getContext("2d");
matrix =  createMatrix(cols, rows);
fillMatrix(matrix, cols, rows);
drawMatrix(matrix, cols,rows,squareSize);
checkUp(matrix, 0,0,rows);

document.write("<br>", "width = ",  width, "<br> height = ", height);



function createMatrix(cols, rows){
	var arr = new Array(rows);
	for(var i = 0;i<rows;i++){
		arr[i] = new Array(cols);
	}
	return arr;
}

function fillMatrix(matrix, cols, rows){
    sequenceLength = (cols * rows) / 2;
    value = 0;
    for (var j = 0; j < rows; j++){
        for (var i = 0; i < cols; i++){
            matrix[j][i] = value;
            value = value < sequenceLength -1 ? value + 1 : 0
        }
    }   
}

function drawMatrix(matrix, cols, rows, squareSize){
    let x = 0;
    let y = 0;
    for (var j = 0; j < rows; j++){
        // siguiente fila
    
        for (var i = 0; i < cols; i++){
            context.strokeRect(x,y, squareSize, squareSize);
            horizontalTextPosition = x + squareSize/2
            verticalTextPosision = y + squareSize/2
            context.fillText(matrix[j][i] ,horizontalTextPosition, verticalTextPosision);

            x = x + squareSize;
        }
    
        y = y + squareSize;
        x = 0;
    }
}

function checkUp(matrix, x, y, rows){
    originalValue = matrix[x][y];
    for(var i = 0; i<rows-1; i++){
        if (x>0)
            x = x -1;
        else
            x = rows -1;
        newValue = matrix[x][y];
        console.log(newValue);
        if (originalValue == newValue){
            return true;
        }
    }
    return false;
}
    
//down isn't needed because it's the same
function checkUp(matrix, x, y, rows){
    originalValue = matrix[x][y];
    for(var i = 0; i<rows-1; i++){
        if (x>0)
            x = x -1;
        else
            x = rows -1;
        newValue = matrix[x][y];
        console.log(newValue);
        if (originalValue == newValue){
            return true;
        }
    }
    return false;
}

//down isn't needed because it's the same
function checkDiagonalUpLeft(matrix, x, y, rows, cols){
    originalValue = matrix[x][y];
    for(var i = 0; i<rows-1; i++){
        if (x>0)
            x = x -1;
        else
            x = rows -1;

        if (y>0)
            y = y -1;
        else
            y = cols -1;
        
        newValue = matrix[x][y];
        console.log(newValue);
        if (originalValue == newValue){
            return true;
        }
    }
    return false;
}