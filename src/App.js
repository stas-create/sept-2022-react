import {Route, Routes} from "react-router-dom";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostPage/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
};

export {App};
