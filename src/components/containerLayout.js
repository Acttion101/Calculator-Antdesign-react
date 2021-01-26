import React from "react";
import styled from "styled-components";

function ContainerLayout(props) {
  
 const  ContainerLayout =styled.div`
 font-size: large;
 `
  return (
    <>
    <ContainerLayout >
      <div>{props.title}</div>
      <div>{props.children}</div>
      </ContainerLayout>
    </>
  );
}
export default ContainerLayout;
