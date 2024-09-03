import React from "react";

class Class extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div className=''>
                {this.props.name}
            </div>
        )
    }
}

export default Class;