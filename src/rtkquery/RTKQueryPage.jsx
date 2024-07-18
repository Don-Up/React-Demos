// RTKQueryPage.js
import React from 'react';
import {useGetPostsQuery} from "./services/apiSlice";
import {Provider} from "react-redux";
import {rtkStore} from "./store";

const RTKQueryComponent = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">RTK Query Example</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error fetching posts.</p>}
            {posts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="mb-2">
                            <h2 className="font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

const RTKQueryPage = () => {
    return <Provider store={rtkStore}>
        <RTKQueryComponent/>
    </Provider>
}

export default RTKQueryPage
