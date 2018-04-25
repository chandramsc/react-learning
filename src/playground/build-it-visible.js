let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h2>Visibility Toggle</h2>
            <button onClick={toggleVisibility}>
                {
                    visibility ? 'Hide details' : 'Show details'
                }
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();