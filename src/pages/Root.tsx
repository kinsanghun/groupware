import 'styles/pages/root.scss';

const Root = () => {
    const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
    return (
    <div className="container">
        <div className="section first">
            <h1>We provide you with groupware that introduces blockchain</h1>
            <h5 className='description'>{lorem}</h5>
            <img src="assets/images/group.png" alt="group"/>
        </div>
        <div className='section second'>
        <div className='wrapper'>
                <img src="assets/images/chain.png" alt="chain"/>
                <div className='text'>
                    <h2>Integrity is enhanced by registering blockchain with electronic payment.</h2>
                    <div className='description'>
                        {lorem}
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='text'>
                    <h2>I don't know what sentence would go well with this.</h2>
                    <div className='description'>
                        {lorem}
                    </div>
                </div>
                <img src="assets/images/groupline.png" alt="chain"/>
            </div>
        </div>
    </div>)
}

export default Root;