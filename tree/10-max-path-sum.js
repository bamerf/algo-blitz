/*
given a tree, return the maximum value obtained by traversing between any two nodes in a valid direction

  max = -inf
  sum
  def dfs(node):
    get the max of node.valu plus dfs(left),  

    left = 100
    right = 99
    me = 2

    201


    left = 100
    right = -99
    me = 1

    left + me = 101

    left = 100
    right = -99
    me = -1

    left = 100

    max(root, root + left, root + right)
    globalMax = max(root, root+left, root+right, root + left + right)

          1
    -20           3
  4   5       6     10
9           11
  12 
    -110       
*/
