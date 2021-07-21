import { Post } from "../components/post";
import { posts } from "../blogList";
import Home from "../components/home"
import { connectToDatabase } from "../util/mongodb";

export default function IndexPage({ properties }) {

  console.log(properties)
  return (
    <>
      <Home />
      <div className="">

      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase()

  const data = await db.collection("blogs").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data))

  // const filtered = properties.map(property => {
  //   return {
  //     //props
  //     _id: property._id,
  //     name:property.name,
  //   }
  // })
  return {
    props: { properties: properties  },
  }

}