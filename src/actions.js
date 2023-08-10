import { baseUrl } from './base_url';
import { redirect } from 'react-router-dom';

// EXPORT ACTIONS
export const createAction = async({request}) => {
    const formData = await request.formData();
    const newBoookmark = {
        name: formData.get('name'),
        url: formData.get('url')
    }

    await fetch(`${baseUrl}/bookmarks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(newBoookmark)
    })

    return redirect('/')
};

export const updateAction = async ({request, params}) => {
    const id = params.id;
    const formData = await request.formData();
    const updatedBookmark = {
        name: formData.get('name'),
        url: formData.get('url')
    }

    await fetch(`${baseUrl}/bookmarks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(updatedBookmark)
    })

    return redirect (`/${id}`)
};

export const deleteAction = async ({params}) => {
    const id = params.id;

    await fetch(`${baseUrl}/bookmarks/${id}`, {
        method: "DELETE"
    })

    return redirect ('/')
};
