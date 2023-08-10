import { useLoaderData, Form } from "react-router-dom";

function Show(props) {

    const bookmark = useLoaderData();
    // console.log(bookmark)

    return (
        <div className="form">
            <a style={{ textDecoration: 'none', color: 'white' }}href={bookmark.url}><h1>{bookmark.name}</h1></a>
            <h2 className="update">Update {bookmark.name}</h2>
            <Form action={`/update/${bookmark._id}`} method='post'>
                <input className="input" type='text' name='name' placeholder="bookmark name" defaultValue={bookmark.name} />
                <input className="input" type='text' name='url' placeholder="bookmark url" defaultValue={bookmark.url} />
                <input className="create" type='submit' value="Update URL" />
            </Form>

            <h2 className="deleteBookmark">Delete Bookmark</h2>
            <Form action={`/delete/${bookmark._id}`} method='post'>
                <input className="delete" type='submit' value='Delete Bookmark' />
            </Form>
        </div>
    )
}

export default Show;