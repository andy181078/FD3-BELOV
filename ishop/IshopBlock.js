var VotesBlock = React.createClass({

    displayName: 'VotesBlock',
  
    getDefaultProps: function() {
      return { question: "Магазин закрыт" }
    },
  
    render: function() {
  
      var goodsCode=[];
      var good=this.props.goods[0];
      var goodCode=        
        React.DOM.div({key:good.code,className:'Good1'},
          React.DOM.span({className:'Text1'},good.text),
          React.DOM.span({className:'Count1'},good.ul1),
          React.DOM.span({className:'Count1'},good.price),
          React.DOM.span({className:'Count1'},good.count),
        );
      goodsCode.push(goodCode);
      for ( var a=0; a<this.props.goods1.length; a++ ) {
        //function f(v,i,a) {
        var good1=this.props.goods1[a];
        var goodCode1=        
          React.DOM.div({key:good1.code,className:'Good'},
            React.DOM.span({className:'Text'},good1.text),
            React.DOM.span({className:'Count'},good1.ul1),
            //React.DOM.span({className:'Count'},
            //React.DOM.a({href:'good1.ul1'})),
            React.DOM.span({className:'Count'},good1.price),
            React.DOM.span({className:'Count'},good1.count),
          );
        goodsCode.push(goodCode1);
      }
      return React.DOM.div( {className:'GoodsBlock'}, 
        React.DOM.div( {className:'Name'}, this.props.name ),
        React.DOM.div( {className:'Goods'}, goodsCode ),
      );
    },
  });