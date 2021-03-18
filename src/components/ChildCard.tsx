import React from 'react'

interface IProps{
 sendDataToChild : string
    receiveData : (data : string) => void
}
interface IState{
    childText : string;

}

class ChildCard extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            childText : ''
        }
    }
    updateChildText = (event : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({

            childText : event.target.value
        })
        this.props.receiveData(event.target.value)
    }


    render() : React.ReactNode{
        return (
            <React.Fragment>
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Child Component</h2>
                                    </div>
                                    <div className="card-body bg-success">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={this.state.childText} onChange={this.updateChildText}/>
                                                <p className="lead text-white font-weight-bold" >From Parent : {this.props.sendDataToChild}</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default ChildCard;