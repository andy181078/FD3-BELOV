var FilterBlock1 = React.createClass({

    displayName: 'FilterBlock1',

    propTypes: {
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        workMode: React.PropTypes.number.isRequired,
        freeanswer: React.PropTypes.bool,
        freeanswertext: React.PropTypes.string.isRequired,
        cbFreeAnswerTextChanged: React.PropTypes.func.isRequired,
    },

    freeAnswerTextChanged: function (EO) {
       // console.log('VotesAnswer: текст свободного ответа изменён - ' + EO.target.value);
        this.props.cbFreeAnswerTextChanged(EO.target.value);
    },

    render: function () {

       // if (this.props.workMode == 1) {
         //   return React.DOM.div(null,
           //     React.DOM.label({ className: 'VotesBlockAnswer' },
             //       React.DOM.input({ type: 'radio', value: this.props.code, name: 'voteanswer' }),
               //     React.DOM.span(null, this.props.text),
                 //   this.props.freeanswer
                   //     ? React.DOM.input({
                     //       type: 'text', name: 'votefreeanswer', className: 'FreeAnswer',
                       //     defaultValue: this.props.freeanswertext, onChange: this.freeAnswerTextChanged
                        //})
                        //: null
               // ),
           // );
       // }
       // else {
           
            } 
            return React.DOM.div({ className: 'VotesBlockAnswer' },   
                   React.DOM.span({ className: 'Text' }, this.props.str),

                  // React.DOM.input({
                  //         type: 'text', name: 'votefreeanswer', className: 'FreeAnswer',
                  //         defaultValue: this.props.freeanswertext, onChange: this.freeAnswerTextChanged
            )
           // React.DOM.input( {type:'checkbox'})
     // React.DOM.input( {type:'text',defaultValue:this.state.str } ),
     // React.DOM.input( {type:'button',value:'Сброс'} ),
       // }


    },

});