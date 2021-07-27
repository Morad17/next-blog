import { connectToDatabase } from '../util/mongodb'

export default function BlogPost({ properties}) {



  return (
    <div className="all-posts">
      <div>
        {properties && properties.map(property => (
          <div className="">
            <h1>{property.username}</h1>
            <p>{property.blogTitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("blogs").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data))

  console.log(properties)

  return {
    props: { properties: properties  },
  }

}
