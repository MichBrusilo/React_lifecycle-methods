var Counter = React.createClass({
	
	getInitialState: function(){
		return {
		
			counter: 0
		};
		
	},
	
	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},

	getDefaultProps: function(){
		console.log('Ustawia domyślne wartości propsów');
	},
	
	componentWillMount: function() {
		console.log('Jeszcze przed renderowaniem');
	},
	
	componentDidMount: function() {
		console.log('Komponent jest już w DOM');
	},
	
	componentWillReceiveProps: function(){
		console.log('Jeśli komponent otrzyma nowe właściwości i nastąpi to już po pierwszym renderowaniu. Mamy dostęp do nowych i starych propsów');
	},
	
	shouldComponentUpdate: function(){
		console.log('Może mieć wartość true lub false, którą wykorzystamy, jeśli nie chcemy, żeby aplikacja wywołała zmiany spowodowane przez zmianę propsów');
    return true;
	},
	
	componentWillUpdate: function(){
		console.log('Możemy operować na DOM');
	},
	
	componentWillUnmount: function(){
		console.log('Zakończenie, czyli możemy anulować nasłuchiwanie');
	},

	render: function(){
		return (
				React.createElement('div', {className: 'counter'},
					React.createElement('h2', {}, 'Licznik'),
					React.createElement('span', {}, 'Wynik: ' + this.state.counter),
					React.createElement('div', {}, 
						React.createElement('button', {
							className: 'counter_button', 
							onClick: this.increment},'Increment Counter'),
							
						React.createElement('button', {
              				className: 'counter_button',
							onClick: this.decrement}, 'Decrement Counter')
					)
				)
		);
	}
});

var element = React.createElement('div', {className: 'counters'},
		React.createElement(Counter),
		React.createElement(Counter),
    	React.createElement(Counter),                              
	);

ReactDOM.render(element, document.getElementById('app'));