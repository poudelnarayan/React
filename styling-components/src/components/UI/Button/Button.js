
import styled from 'styled-components';


const Button = styled.button`

  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;


&:focus {
  outline: none;
}


&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}


`;

/*
here we are using styled-components to create a styled button
A button is a method here  instead called with parenthesis we use a 
backticks. 
This is just a javascript syntax.

here in the button method will return a new Button Component.
The styled package has a mthods for all HTML elements.
*/

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
