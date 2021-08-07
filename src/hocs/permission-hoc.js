import React from 'react';

//TODO
const PermissionWrapper = (props) => (WrapComponent) => {
  const MainComponent = (props) => {
    const permisiion = true;
    console.log(props)
    if (permisiion) {
      return <WrapComponent/>
    }
    return <div>error</div>
    
  }
  return MainComponent
}

export default PermissionWrapper
