import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {

  const posts = useSelector(state => state.posts);


  return (
    <div className="App">
      <CreatePost/>
      <PostList  posts={posts} />
    </div>
  );
}

export default App;
