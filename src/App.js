import "./App.css";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Friends from "./Components/Friends";
import FriendDetails from "./Components/FriendDetails";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/Posts/PostDetails";

function App() {
    return (
        <div className="App">
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />}>
                    <Route path=":postID" element={<PostDetails />} />
                </Route>
                <Route path="/projects" element={<Projects />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/friend/:friendID" element={<FriendDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
