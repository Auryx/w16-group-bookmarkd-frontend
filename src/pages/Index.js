import { Form, Link, useLoaderData } from "react-router-dom"
function Index(props) {
    const bookmark = useLoaderData()
    console.log(bookmark)
    return (
        <div>
            <h2>Create a Bookmark</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Bookmark Name" defaultValue={bookmark.name} />
                <input type="input" name="url" placeholder="Bookmark URL" defaultValue={bookmark.url} />
                <input type="submit" value="create bookmark" />
            </Form>           
            
            <h2>Bookmarks</h2>
            {bookmark.map(bookmark => (
                <div key={bookmark._id} className="bookmark">
                    <Link to={`/${bookmark._id}`}>
                        <h1>{bookmark.name}</h1>
                    </Link>
                    <h3>{bookmark.url}</h3>
            </div>
        ))}
    </div>
)}
  
export default Index
  