// const appRoot = document.getElementById('app');

// const app = {
//     title: 'Visiblity Toggle',
//     toggle: false,
//     desc: 'These are some details'
// };

// const toggleDetails = () => {
//     app.toggle = !app.toggle;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleDetails}>{app.toggle ? 'Hide Details' : 'Show Details'}</button>
//             {app.toggle && <p>{app.desc}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();

class VisiblityToggle extends React.Component {
    
    constructor(props, handleToggleVisibility){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: 'Visiblity Toggle',
            toggle: false,
            desc: 'These are some details'
        }
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            };
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.toggle ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.toggle && <p>{this.state.desc}</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisiblityToggle />, document.getElementById('app'));
