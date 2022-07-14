var board = "";
var size = 8
for(let i=0;i<size;i++)
{
    for(let j=0;j<8;j++)
    {
       if(j%2==0)
       {
        board += "#";
       }
       else{
        board += " ";
       }
    }
    board += '\n';

}
console.log(board);
