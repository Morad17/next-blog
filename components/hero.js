import { Link } from 'next/link'
import Card from './card';

export default function BlogPost() {
    return(
        <div className="row">
            <Card>
                <div style={{ padding:'50px 0'}}>
                    <div className="banner">Hero Banner</div>
                </div>
                <div className="hero-nav">
                <ul className="">
                    <li><a>Home</a></li>
                    <li><a>Post</a></li>
                    <li><a>About</a></li>
                    <li><a>User</a></li>
                    <li><a>Edit</a></li>
                    <li><a>Contacts</a></li>
                </ul>
                <div className="search-row">
                </div>
                </div>
            </Card>
        </div>
    )
}