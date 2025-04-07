import MainLayout from '~/layouts/MainLayout';
import Home from '~/pages/Home/Home';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <MainLayout>
            <Home />
        </MainLayout>
    );
}

export default App;
