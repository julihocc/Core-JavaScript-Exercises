Exercise
Implement a partially applied curriedFunction
that allows you to specify non consecutive arguments 

## Example 
function fn(a,b,c) {...}

function modifiedCurry(fn){
  ...
  return otherFn
}

function partiallyApplied = modifiedCurry(Fn) 

// partiallyApplied(undef, b) = (a,c) => fn(a,b,c) 
const f1 = partiallyApplied(undef, b) // (a,c) => fn(a,b,c)
f1(undefined, c) // (a) => fn(a,b,c)
partiallyApplied(a, undef, c) = b => fn(a,b,c)