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
    
           
             for(i = 0; i < this.m; i++ )
                {
                    document.write("<br>");
                   
                    for(j = 0; j < this.n; j++)
                    {
                        document.write("<b>&nbsp;&nbsp;" + this.matrix[i][j]);
             
                    }
              
             }       
        
    }
    
    
}

window.onload = () => {
    var tramatrix = new ConnctedCells();
    tramatrix.start();
};
