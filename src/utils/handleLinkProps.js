import { Link, Richtext } from 'prismic-reactjs'

/** 
 * Default function to handle props passed to LinkComponent.
 * This will probably be moved to its own package.
*/
export const handleLinkProps = (linkData, label, linkResolver = () => { return '/404' }) => ({
  href: Link.url(linkData, linkResolver),
  children: typeof label === 'string' ? label : <Richtext render={label} />
})