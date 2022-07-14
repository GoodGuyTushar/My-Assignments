var board = "";
var size = 8
for(let i=0;i<size;i++)
{
    for(let j=0;j<4;j++)
    {
       if(i%2==0)
       {
        board += " #";
       }
       else{
        board += "# ";
       }
    }
    board += '\n';

}
console.log(board);