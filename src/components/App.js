import React, {Component, useState} from "react";
import '../styles/App.css';

function App(){

    let [display,setDisplay]=useState()
        
        let flames=['Siblings','Friends','Love','Affection','Marriage','Enemy']

        function handleSubmit(e){
            e.preventDefault()
            let str1=e.target.name1.value
            let str2=e.target.name2.value
            if(str1=='' || str2==''){
                setDisplay('Please Enter valid input')
            }else{
                hanldleRelationship(str1,str2)
            }
            
        }

        function hanldleRelationship(str1,str2){
            str1 = str1.toLowerCase().replace(/\s/g, '').split('');
            str2 = str2.toLowerCase().replace(/\s/g, '').split('');

            for (let i = 0; i < str1.length; i++) {
                let index = str2.indexOf(str1[i]);
                if (index !== -1) {
                    str1.splice(i, 1);
                    str2.splice(index, 1);
                    i--; // Adjust index after removal
                }
            }
            let totalLength=str1.length+str2.length
            let calculate=Math.abs(totalLength%6)
            setDisplay(flames[calculate])
            
        }
        
        function handleClear(){
            setDisplay('')
            document.getElementById('name1').value=""
            document.getElementById('name2').value=""
        }
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <form onSubmit={(e)=>{handleSubmit(e)}}  >
                <input type="text" name="name1" id="name1" data-testid="input1"  />
                <input type="text" name="name2" id="name2" data-testid="input2" />
                <button type="submit"  data-testid="calculate_relationship" name="calculate_relationship" >Calculate Relationship Future</button>
                <button type="button" data-testid="clear"  name="clear" onClick={handleClear}   >Clear</button>
               </form>

               {
                <h3 data-testid="answer" >{display}</h3>
               }
            </div>
        )
    }



export default App;
