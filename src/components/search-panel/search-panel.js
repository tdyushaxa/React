import React,{Component} from 'react';
import './search-panel.css'


class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state={
            term: ''
        }
    }
    updateTermHandler = e =>{
        const term = e.target.value.toLowerCase()
        this.setState({term:term})
        this.props.updateTermHandler(term)
    }
  render() {
    return (
      <div>
        <input  className='form-control own-search' type="text"  onChange={this.updateTermHandler} value={this.state.value}/>
      </div>
    )
  }
}
export default SearchPanel