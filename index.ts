class ConnctedCells
{

    matrix:number[][] = []    
    i=0;  j= 0;  m=0;  n=0;

    ConnctedCells(){
        //constructor
    }

    start() {
      
        document.write("<h2>Connected Cells</h2><hr>");

        var rowsPrompValue = prompt('Please enter the Number of Rows:');
        this.m = parseInt(rowsPrompValue || "0");
        var colsPrompValue = prompt('Please enter the Number of Columns: ');
        this.n =  parseInt(colsPrompValue || "0");
        this.getInputMatrix();

        document.write("<br>");
        document.write("<br>");
       
    }

    getInputMatrix(){
        var i = this.i;
        var j = this.j;
         document.write("<b>Matrix Elements :");
            for (i = 0; i < this.m ; i++)
            {
                this.matrix.push([])
                for (j = 0; j < this.n; j++)
                {
                    var colEntiresPrompt = prompt("Enter the element of First Matrix -> Row " + (i) + " And Coloumn " + (j))
                    this.matrix[i][j] = parseInt(colEntiresPrompt || '0');               
                }
                document.write("<br>&nbsp;&nbsp;&nbsp;&nbsp;");
            } 
    
            var table = document.createElement("table");
            table.border = "1";
            table.style.width = '100';
    
             for(i = 0; i < this.m; i++ )
                {
                   var row = table.insertRow(-1);
                   
                    for(j = 0; j < this.n; j++)
                    {
                        var cell = row.insertCell(-1);
                        cell.style.width = '40';
                        cell.style.height = '40';
                        cell.innerHTML = ""+this.matrix[i][j] ;
             
                        
                    }
              
             }       
             var dvTable = document.createElement("div");
             dvTable.appendChild(table);
             document.write(dvTable.innerHTML);
             document.write("<br>");
             document.write("<br>");
    }

    BFS(m:number[][],r:number,c:number,visited:boolean[][]){
        visited[r][c]=true;
        var acc=1;
        var nei = new Array();
        nei.push([r,c]);
        while(nei.length>0){
            var cur= nei.shift();
            var adj= this.checkNeighbor(m,cur[0],cur[1]);
            for(var i=0;i<adj.length;i++){
                var row=adj[i][0];
                var col=adj[i][1];
                if(!visited[row][col]){
                    visited[row][col]=true;
                    acc++;
                    nei.push([row,col]);
                }
            }
        }
        return acc;
    }
    
    checkNeighbor(m:number[][],r:number,c:number){
        var arr=[];
        if (r-1>=0&&c-1>=0){
            if(m[r-1][c-1]===1){
                arr.push([r-1,c-1]);
            }
        }
        if(r-1>=0){
            if(m[r-1][c]===1){
                arr.push([r-1,c]);
            }
        }
        if(r-1>=0&&c+1<m[r].length){
            if(m[r-1][c+1]===1){
                arr.push([r-1,c+1]);
            }
        }
        if(c-1>=0){
            if(m[r][c-1]===1){
                arr.push([r,c-1]);
            }
        }
        if(c+1<m[r].length){
            if(m[r][c+1]===1){
                arr.push([r,c+1]);
            }
        }
        if(r+1<m.length&&c-1>=0){
            if(m[r+1][c-1]===1){
                arr.push([r+1,c-1]);
            }
        }
        if(r+1<m.length){
            if(m[r+1][c]===1){
                arr.push([r+1,c]);
            }
        }
        if(r+1<m.length&&c+1<m[r].length){
            if(m[r+1][c+1]===1){
                arr.push([r+1,c+1]);
            }
        }
        return arr;
    }
    
    
}

window.onload = () => {
    var tramatrix = new ConnctedCells();
    tramatrix.start();
};
