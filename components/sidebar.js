import axios from 'axios'
import Card from './card'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {blogs: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/blogs/')
          .then(response => {
            this.setState({ blogs: response.data })
          })
          .catch((error) => {
            console.log(error)
          })
      }

    render() {
        return(
            <div className="sidebar-container">
                <Card style={{ marginBottom:'20px', padding:'10px', boxSizing:'border-box'}}>
                    <div className="card-header">
                        <span>About Us</span>
                        </div>
                        <div className="profile-image">
                        <img src="/images/profile-img.png" alt=""/>
                        </div>
                        <div className="card-body center">
                        <p>Morad El Bouchikhi Senior Developer</p>
                    </div>
                </Card>
                <Card>
                    <div className="card-header">
                        <span>Social Network</span>
                    </div>
                </Card>
                <Card>
                    <div className="card-header">
                        <span>Recent posts</span>
                    </div>

                    <div className="">
                        {this.state.blogs.map((blog => {
                        return  <Card>
                                    <div className="blogTitles">{blog.blogTitle}</div>
                                </Card>
                        }))}
                    </div>
                </Card>

            </div>
        )
    }
}

    export default Sidebar