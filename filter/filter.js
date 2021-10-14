var FilterBlock = React.createClass({

  displayName: 'FilterBlock',

  propTypes: {
    workMode: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    answers:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        freeanswer: React.PropTypes.bool,
      })
    ),
    deffreeanswertext: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return { 
      str:'',
    };
  },

  freeAnswerTextChanged: function(EO) { 
    this.setState( {str:EO.target.value} );
    console.log (this.state.str);
  },

    
 

 

  render: function() {

    //var filterCode=this.props.strings.map( v =>
     // React.createElement(FilterBlock1, {key:v.code,
      //  text:v.text,str:this.state.str
        //str:this.state.str, cbFreeAnswerTextChanged:this.freeAnswerTextChanged,
        
     // })
    //);
    var res=this.props.strings;
  if (this.state.str!=='') {
    
    res=res.filter( v=>
      (v.text.indexOf(this.state.str)!==-1)
      React.DOM.div({ className: 'FilterBlockb' },v.text)
                         
) 
    }
    return React.DOM.div( {className:'FilterBlock'}, 
      React.DOM.input( {type:'checkbox'}),
      React.DOM.input( {type:'text',defaultValue:this.state.str,onChange:this.freeAnswerTextChanged } ),
      React.DOM.input( {type:'button',value:'Сброс'} ),
      React.DOM.div( {className:'FilterBlocka'},res )
     
      
    );
  },

});