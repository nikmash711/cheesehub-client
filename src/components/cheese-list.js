import React from 'react';

export default function CheeseList(props){
  let cheeselist = props.cheeselist.map(cheese=>(
    <li>{cheese}</li>
  ))

  return(
    <ul>
      {cheeselist}
    </ul>
  );
}