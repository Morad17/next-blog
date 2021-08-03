import axios from 'axios'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { connectToDatabase } from '../util/mongodb';

export default function NewBlog({allUsers}) {
 
  
  /*----Blog Variable Handlers ---*/
  onChangeUsername(e) {
    this.setState ({
      username: e.target.value
    });
  }

  onChangeBlogTitle(e) {
    this.setState ({
      blogTitle: e.target.value
    });
  }

  onChangeMainContent(e) {
    this.setState ({
      mainContent: e.target.value
    });
  }

  onChangeBlogType(e) {
    this.setState ({
      blogType: e.target.value
    });
  }

  onChangeCategory(e) {
    this.setState ({
      category: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState ({
      date: date
    });
  }


  onSubmit (e) {
    e.preventDefault();

    const blog = {
      username: this.state.username,
      blogTitle: this.state.blogTitle,
      mainContent: this.state.mainContent,
      blogType: this.state.blogType,
      category: this.state.category,
      date: this.state.date,
      featured: false, 
    }

    console.log(blog)
    console.log(blog.date)

    axios.post('http://localhost:5000/blogs/add', blog)
      .then(res => console.log(res.data));

      window.location ='/'
  }
    return(
      <div className="create-blog-row">
        <h2 class="create-blog-heading">Create Blog Post</h2>
        <hr />
        <div className="create-blog-form">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
              <option type="text" value="" className="default-value">Select Username</option>
              {allUsers && allUsers.map(user=> (
                  <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Blog Title</label>
            <input type="text" required className="form-control" value={this.state.blogTitle} onChange={this.onChangeBlogTitle} />
          </div>
          <div className="form-group">
            <label>MainContent </label>
            <input type="text" className="form-control" value={this.state.mainContent} onChange={this.onChangeMainContent} />
          </div>
          <div className="form-group">
            <label>Blog Type</label>
            <select name="select-blogType" onChange={this.onChangeBlogType} required>
              <option type="text" className="form-control default-value" value="" >Select Blog Type</option>
              <option type="text" className="form-control" value='Journal' >Journal</option>
              <option type="text" className="form-control" value='Article' >Article</option>
              <option type="text" className="form-control" value='Tutorial' >Tutorial</option>
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="select-category" onChange={this.onChangeCategory} required >
              <option type="text" className="form-control default-value" value="" >Select Category</option>
              <option type="text" className="form-control" value='Html' >HTML</option>
              <option type="text" className="form-control" value='Css' >CSS</option>
              <option type="text" className="form-control" value='Javascript' >JAVACRIPT</option>
              <option type="text" className="form-control" value='React' >REACT</option>
              <option type="text" className="form-control" value='Python' >PYTHON</option>
              <option type="text" className="form-control" value='Database' >DATABASE</option>
              <option type="text" className="form-control" value='Other' >OTHER</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date Created: </label>
            <div className="">
              <DatePicker selected={this.state.date} onChange={this.onChangeDate} dateFormat="dd/MM/yyyy" />
            </div>
          </div>
          
          <div className="form-group">
            <input type="submit" value="Create Blog" className="btn btn-primary" />
          </div>
        </form>
        </div>
      </div>
      )
    }
  }


export default NewBlog

export async function getServerSideProps(context) {
  const {db} = await connectToDatabase()

  const data = await db.collection("users").find({}).limit(20).toArray();

  const allUsers = JSON.parse(JSON.stringify(data));

  const filteredUsers = allUsers.map( user =>{
    return {
      username: user.username,
    }
  })

  return {
    props: {allUsers: filteredUsers}
  }
}