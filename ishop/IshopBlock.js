var VotesBlock = React.createClass({

    displayName: 'VotesBlock',
  
    getDefaultProps: function() {
      return { question: "Магазин закрыт" }
    },
  
    render: function() {
  
      var goodsCode=[];
      var good1=this.props.goods[0];
      var goodCode1=        
        React.DOM.div({key:good1.code,className:'Good1'},
          React.DOM.span({className:'Text1'},good1.text),
          React.DOM.span({className:'Count1'},good1.ul1),
          React.DOM.span({className:'Count1'},good1.price),
          React.DOM.span({className:'Count1'},good1.count),
        );
      goodsCode.push(goodCode1);
      for ( var a=1; a<this.props.goods.length; a++ ) {
        var good=this.props.goods[a];
        var goodCode=        
          React.DOM.div({key:good.code,className:'Good'},
            React.DOM.span({className:'Text'},good.text),
            //React.DOM.span({className:'Count'},good.ul1),
            React.DOM.span({className:'Count'},good.ul1),
            React.DOM.span({className:'Count'},good.price),
            React.DOM.span({className:'Count'},good.count),
          );
        goodsCode.push(goodCode);
      }
      return React.DOM.div( {className:'GoodsBlock'}, 
        React.DOM.div( {className:'Name'}, this.props.name ),
        React.DOM.div( {className:'Goods'}, goodsCode ),
      );
    },
  });