import Link from 'next/link'

import Card from './card'

/**
* @author
* @function BlogCard
**/

const BlogCard = (props) => {

  /*-----Format Date---- */
   var originalDate = props.blog.date.substring(0,10)
   var splitDate = originalDate.split("-")
   var reverseDate = splitDate.reverse()
   var finalDate = reverseDate.join()
   const formatDate = finalDate.replace( /,/g, '-')




  return(
    <div prop={props} className="BlogCard">
        <div className="BlogCard-image">
          <img className="" src="images/blog-template.jpg" alt="" />
        </div>
        <h2 className="BlogCard-title">{props.blog.blogTitle}</h2>
        <div className="BlogCard-text">
          <p>{props.blog.category}</p>
          <p>{props.blog.username},{formatDate}</p>
          <div className="col">
            <Link to={"/edit/"+props.blog._id}><a class="edit-button"href="#">Edit</a></Link> <a class="delete-button"href="#" onClick={() => { props.deleteBlog(props.blog._id) }}>Delete</a>
          </div>
        </div>
    </div>
   )
  }


export default BlogCard