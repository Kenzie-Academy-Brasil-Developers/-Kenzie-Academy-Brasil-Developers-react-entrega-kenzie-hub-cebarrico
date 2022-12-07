import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none ;   

}

button{
  cursor: pointer;
}

fieldset{
  border: none;
}
:root{
  --color-grey-0: #F8F9FA;
  --color-grey-1: #868E96;
  --color-grey-2: #343B41;
  --color-grey-3: #212529;
  --color-grey-4: #121214;

  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;

  --sucess: #3FE864;
  --negative: #E83F5B;
}


body {
  background-color: var(--color-grey-4);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
}
`;
