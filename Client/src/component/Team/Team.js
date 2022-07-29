import React from 'react';   
import './Teams.css';    
 


function Team(){
    return(
        <div className='teams'>  
        <table className='table'> 
        <tr>
          <th id="id2">Employee Name</th>  
          <th id="id1">Role</th>  
        </tr>
        <tr>
          <td>Suman Saurabh</td> 
          <td>SDE I</td>    
        </tr>
        <tr>
          <td>Rishika Gaur</td>  
          <td>Software Testing</td>    
        </tr>
        <tr>
          <td>Subham Kumar</td> 
          <td>Software Testing</td> 
        </tr>
        <tr>
          <td>Shivansh Singh</td>  
          <td>Software Testing</td> 
        </tr>
        <tr>
          <td>Sunny Kumar</td>  
          <td>Software Testing</td> 
        </tr>
        <tr>
          <td>Aman Bali</td>  
          <td>Software Testing</td> 
        </tr>
        <tr>
          <td id='id3'>Harsh Vardhan</td> 
          <td id='id4'>Software Testing</td>    
        </tr>
      </table> 
        </div>
    );   
}

export default Team; 