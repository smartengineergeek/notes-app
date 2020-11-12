import React from 'react';

class Create extends React.Component{
    constructor(props){
        super(props);
        this.headingInputRef = React.createRef();
        this.descriptionInputRef = React.createRef();
        this.formHandler = this.formHandler.bind(this);
    }
    
    formHandler(){
        console.log(" heading ", this.headingInputRef.value)
    }

    render(){
        return(
            <div className="create">
                <form onSubmit={this.formHandler}>
                    <input ref={input => this.headingInputRef = input} />
                    <input ref={input => this.descriptionInputRef = input} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Create;