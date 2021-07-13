import Link from 'next/link'
import { HeadPost } from './headPost'

export const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post

    return (
        <article>
            <HeadPost meta={meta} isBlogPost />
            <Link href={'/blog' + link}>
                <a>Read More</a>
            </Link>
        </article>
    )
}