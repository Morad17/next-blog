import Home from "../components/home"
import { connectToDatabase } from '../util/mongodb'

export default function IndexPage({ properties }) {

  {console.log(typeof properties )}

  return (
    <>
      <Home />
      <div className="">
        {console.log(properties)}

        {properties && properties.map(property => (
          <div className="">
            <h1>{property.username}</h1>
            <p>{property.blogTitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("blogs").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  const filtered = properties.map(property => {
    return {
      _id : property._id,
      username : property.username,
      blogTitle : property.blogTitle, 
    }
  })

  console.log(typeof properties )

  return {
    props: { properties: filtered  },
  }

}