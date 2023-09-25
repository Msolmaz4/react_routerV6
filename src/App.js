
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.tsx';
import Contaxt from './pages/Contaxt.tsx';
import BlogLayout from './pages/blog/index.tsx';
import Categori from './pages/blog/Categori.tsx';
import Post from './pages/blog/Post.tsx';
import Blog from './pages/blog/Blog.tsx';

function App() {
  return (


    <BrowserRouter>

      <nav>
        {/* boyle ya[parsak sayfa yenileniyor ben  unu istemiyorum bunu yerine link ya[pariz]]
          <a href='/'> Amasayda</a>
          <a href='/contact'> Contact</a>
          <a href='/blog'> Blog</a> */}
        {/* bunda ıse actıv klası eklıyemezsın o yuzden NAVLINK KULLAN
           <Link to='/'> Amasayda</Link>
           <Link to='/contact'> Contatct</Link>
           <Link to='/blog'>Blog</Link> */}
        <NavLink to='/' className={({isActive})=> isActive && 'aktif'}> Amasayda</NavLink>
        <NavLink to='/contact' style={({isActive})=>({
          backgroundColor: isActive ? 'black' :'transparent'
        })}> Contatct</NavLink>
        <NavLink to='/blog'>Blog</NavLink>

      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contaxt />} />
        {/* nesned router  dlfer dayfa;adara karimamaisa icin burafa layout yaptik */}
        <Route path='/blog' element={<BlogLayout />} >
 
          <Route index = {true} element={<Blog/>}/>
          <Route path='categori' element={<Categori/>}/>
          <Route path='post/:id/:url' element={<Post/>} />


        </Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
