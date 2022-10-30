/**
 * @param {character[][]} grid
 * @return {number}
 */

// HARD AF
const getAdjNeighbors = function(i, j, grid, visited){
    const adjNeighbors = [];
    
    if(i > 0 && !visited[i-1][j]) adjNeighbors.push([i-1,j]);
    if(i < grid.length - 1 && !visited[i+1][j]) adjNeighbors.push([i+1, j]);
    
    if(j > 0 && !visited[i][j-1]) adjNeighbors.push([i,j-1]);
    if(j < grid[0].length - 1 && !visited[i][j+1]) adjNeighbors.push([i, j+1]);
    
    return adjNeighbors;
};

const dfs = function (i, j, grid, visited){
    const stack = [[i,j]];
    let islandSize = 0;
    while(stack.length){
        let currNode = stack.pop();
        let [i, j] = currNode;
        
        //check if visited
        if(visited[i][j]) continue;
        visited[i][j] = true;
        
        //check if cell is part of an island
        if(grid[i][j] === '0') continue;
        islandSize++;
        
        let adjNeighbors = getAdjNeighbors(i, j, grid, visited);
        
        stack.push(...adjNeighbors);
    }
    return islandSize > 0 ? true : false;
};


var numIslands = function(grid) {
    const visited = grid.map(row => row.map(cell=>false));
    let islandCount = 0;
    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
            if(dfs(i, j, grid, visited)){
                islandCount++;
            }
        }
    }
    return islandCount;
};