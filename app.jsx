
// ReactDOM.render(
//     <h1>Hola mundo</h1>,
//     document.getElementById("root")
// )


//creamos una funcion para renderizar un reloj en pantalla donde cambia el h1 en todo momento sin necesidad de ver que necesito cambiar a futuro

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this - this.timerID);
    }

    tick() {
        this.setState({ date: new Date() })
    }


    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}




ReactDOM.render(<clock />, document.getElementById('reloj'));











function Welcome(props) {  //un elemento puede represnetar un componente definido por el usuario, EMPEZAR SIEMPRE CON MAYUSUCULA PARA QUE NO CONFUNDA CON ETIQUETAS HTML,
    return <h1>Hello, {props.name}</h1>
};


function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    )
}

const element = <Welcome name="Sara" />;


ReactDOM.render(
    <App />,
    document.getElementById("root")
);



function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{props.date}</div>
        </div>
    );
}

//extraer componentes mejora la usabilidad para usarlos en otros funciones


function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl1}
            alt={props.user.name}
        />
    );
};

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}


const comment = {
    date: new Date().toLocaleDateString(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}

    />,
    document.getElementById('root')
);