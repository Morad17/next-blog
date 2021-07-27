import Card from './card';

export default function Hero() {
    return(
        <div className="row">
            <Card>
                <div style={{ padding:'50px 0'}}>
                    <div className="banner center"><h1>Welcome to my blogsite!</h1></div>
                </div>
                <div className="hero-nav">
                {/* <ul className="">
                    <li><a>Home</a></li>
                    <li><a>Post</a></li>
                    <li><a>About</a></li>
                    <li><a>User</a></li>
                    <li><a>Edit</a></li>
                    <li><a>Contacts</a></li>
                </ul> */}
                <div className="search-row">
                </div>
                </div>
            </Card>
        </div>
    )
}