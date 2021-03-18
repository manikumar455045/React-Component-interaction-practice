import React from 'react'
import ChildCard from "./ChildCard";

interface IProps{

}
interface IState{
    parentText : string;
    childText : string;

}

class ParentCard extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            ...this.state,
            parentText : ''

        }
    }

    updateParentText = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            parentText : event.target.value
        })
    }
    receiveDataFromChild = (data : string) => {
        this.setState({
            ...this.state,
            childText : data
        })
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Parent Component</h2>
                                    </div>
                                    <div className="card-body bg-info">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={this.state.parentText} onChange={this.updateParentText}/>
                                                <p className="lead text-white font-weight-bold">From Child : {this.state.childText} </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ChildCard sendDataToChild = {this.state.parentText} receiveData = {this.receiveDataFromChild}/>
            </React.Fragment>
        );
    }

}
export default ParentCard;