var FilterBlock = React.createClass({

  displayName: 'FilterBlock',

  //propTypes: {
   // workMode: React.PropTypes.number.isRequired,
    //question: React.PropTypes.string.isRequired,
    //answers:React.PropTypes.arrayOf(
     // React.PropTypes.shape({
       // code: React.PropTypes.number.isRequired,
       // count: React.PropTypes.number.isRequired,
       // text: React.PropTypes.string.isRequired,
       // freeanswer: React.PropTypes.bool,
    //  })
   // ),
   // deffreeanswertext: React.PropTypes.string.isRequired,
  //},

  getInitialState: function() {
    return { 
      str:'',
      res:this.props.strings,
    };
  },

  freeAnswerTextChanged: function(EO) { 
    this.setState( {str:EO.target.value} );
    console.log (this.state.str);
  },

  freeAnswerTextChanged1: function(fff) { 
    this.setState( {res:fff} );
    
  },  
 

 

  render: function() {

    //var filterCode=this.props.strings.map( v =>
     // React.createElement(FilterBlock1, {key:v.code,
      //  text:v.text,str:this.state.str
        //str:this.state.str, cbFreeAnswerTextChanged:this.freeAnswerTextChanged,
        
     // })
    //);
    var res1=this.state.res;
  if (this.state.str!=='') {
    
   res1=res1.filter( v=>v.text.indexOf(this.state.str!==-1) )
   
    }
  
      res1=res1.map( v=>
        React.DOM.div({ className: 'FilterBlockb' },v.text)
                           
  ) 
  freeAnswerTextChanged1(res1) 
    return React.DOM.div( {className:'FilterBlock'}, 
      React.DOM.input( {type:'checkbox'}),
      React.DOM.input( {type:'text',defaultValue:this.state.str,onChange:this.freeAnswerTextChanged,} ),
      React.DOM.input( {type:'button',value:'Сброс'} ),
      React.DOM.div( {className:'FilterBlocka'},res1 )
     
    
    );
      }
  },

);