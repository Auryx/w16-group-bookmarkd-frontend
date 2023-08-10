import { Form, Link, useLoaderData } from "react-router-dom"
function Index(props) {
    const bookmark = useLoaderData()
    console.log(bookmark)
    return (
        <div>
            <div className="form">
                <h2 id="create">Create a Bookmark</h2>
                <Form action="/create" method="post">
                    <input className="input" type="input" name="name" placeholder="Bookmark Name" defaultValue={bookmark.name} />
                    <input className="input" type="input" name="url" placeholder="Bookmark URL" defaultValue={bookmark.url} />
                    <input className="create" type="submit" value="create bookmark" />
                </Form>    
            </div>       
            
            <div className="list">
            <h2 className="bookmarks">Bookmarks</h2>
                <div className="links">
            {bookmark.map(bookmark => (
                <div key={bookmark._id}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/${bookmark._id}`}>
                           <h1>{bookmark.name}</h1> 
                    </Link>                    
                </div>
                
            ))}
            </div>
            </div>
        </div>
)}
  
export default Index
  