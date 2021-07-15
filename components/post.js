import Link from "next/link";
import { HeadPost } from "./headPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    

    <article>
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more &rarr;</a>
      </Link>
    </article>
  );
};
