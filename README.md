# Solution
1) Clone the project   git clone https://github.com/Irfank055/connected-cells.git 
2) npm install
3) tsc index.ts   (to compile ts into js)
4) npm start      (defined a script  "start": "live-server" to run the server)
5) enter the informations requested in the prompt (e.g number of rows and cols, matrix enteries etc)
6) see out put ( region in green and number of cells in largest elements);

Thanks



# connected-cells
A Typescript exercise in search algorithm

**Note: PLEASE FORK THIS REPOSITORY** 

Consider a matrix with n rows and m columns, where each cell contains either a 0 or a 1 and any cell containing a 1 is called a filled cell. Two cells are said to be connected if they are adjacent to each other horizontally, vertically, or diagonally; in other words, cell [ j ][ k ] is connected to cells [ j - 1 ][ k - 1 ], [ j - 1 ][ k ], [ j - 1 ][ k + 1 ], [ j ][ k - 1], [ j ][ k + 1 ], [ j + 1][k - 1 ], [ j + 1 ][ k ], and [ j + 1 ][ k + 1 ], provided that the location exists in the matrix for that [ j ][ k ].

If one or more filled cells are also connected, they form a region. Note that each cell in a region is connected to at least one other cell in the region but is not necessarily directly connected to all the other cells in the region.

## Task 
Given an n * m matrix, find and print the number of cells in the largest region in the matrix. Note that there may be more than one region in the matrix.

## Requirement
You *MUST* use Typescript to complete this exercise.

## Test Cases

    n = 4, m = 4, matrix =
    1 1 0 0
	  0 1 1 0
	  0 0 1 0
	  1 0 0 0
    (Answer: 5)

    n = 5, m = 5, matrix =
    1 1 0 0 0
    0 1 1 0 0
    0 0 1 0 1
    1 0 0 0 1
    0 1 0 1 1
    (Answer: 5)

## Bonus (optional)

Build a user interface that showcases the algorithm, it should include:
* A form to input number of columns and rows
* An interface to specify the content of the cells (0 or 1)

Note: you *MUST* use React to complete this section.
