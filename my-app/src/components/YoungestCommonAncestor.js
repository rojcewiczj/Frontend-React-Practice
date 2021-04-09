import {useState} from "react"



function YCA() {

class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

  const FirstAncestor = new AncestralTree("A");
  const [Ancestors, setAncestors] = useState([FirstAncestor]);
  const [name, setName] = useState("")
  const [ancestorRef , setAncestorRef] = useState("")
  const [childrenOfAncestors, setChildrenOfAncestors] = useState({"A" : []})
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
   const depthOne = getDescendantDepth(descendantOne, topAncestor);
   const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
   if(depthOne > depthTwo){
       return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
   } else {
        return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
   }
  }
  
  function getDescendantDepth(descendant, topAncestor){
      let depth = 0;
      while(descendant !== topAncestor){
        depth ++;
          descendant = descendant.ancestor;
      }
      return depth
  }
  
  function backtrackAncestralTree(lowerDescendant, higherDescendant, diff){
      while (diff > 0){
          lowerDescendant = lowerDescendant.ancestor;
          diff --;
      }
      while(lowerDescendant !== higherDescendant){
        lowerDescendant = lowerDescendant.ancestor;
          higherDescendant = higherDescendant.ancestor;
      }
      return lowerDescendant;
  }



const AddAncestor = (event) => {
    event.preventDefault()
    Ancestors.forEach(ancestor => {
        if (ancestor.name == ancestorRef){
            if (childrenOfAncestors[ancestorRef].length < 2){
                childrenOfAncestors[ancestorRef].push(name) 
                console.log(childrenOfAncestors[ancestorRef])
                childrenOfAncestors[name] = []
                const newAnc = new AncestralTree(name)
               
                Ancestors.forEach((ancestor) =>{
                        console.log(ancestor)
                        if (ancestor.name == ancestorRef){
                            newAnc.ancestor = ancestor
                        }
                    })
                Ancestors.push(newAnc)
                console.log(Ancestors)
                setAncestors([...Ancestors])
            }
        }
        
    });
  }
 

    return (
    <div>
      <div>
       {Ancestors.map((ancestor)=>(
        <div>
         <p>{ancestor.name}</p>
            <div>
                {childrenOfAncestors[ancestor.name].map((child)=>(
                    <p>{child.name}</p>
                ))}
            </div>
         </div>
       ))}
      </div>
      <form onSubmit = {AddAncestor}>
          <label>
              Name of new ancestor: 
              <input type = "text" value ={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
              Ancestor of new ancestor: 
              <input type = "text" value ={ancestorRef} onChange={e => setAncestorRef(e.target.value)} />
          </label>
          <button type="submit">Add Ancestor</button>
      </form>
      <p>
        
      </p>
      </div>
      
    );
  }

  export default YCA