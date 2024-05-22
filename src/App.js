import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import House from './components/House';
import ListAHouse from './components/ListAHouse';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Enquiries from './components/Enquiries';
import Enquiry from './components/Enquiry';
import SearchFilter from './components/SearchFilter';
import SearchHouse from './components/SearchHouse';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <>
   <Header/>
   <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/listahouse' element = {<ListAHouse/>}/>
   <Route path='/house/:id' element = {<House/>}/>
   <Route path = '/search' element = {<SearchFilter/>}/>

   <Route path = '/searchresults/:locality/:bhk' element = {<SearchResults/>}/>
   <Route path = '/searchhouse/:id' element = {<SearchHouse/>}/>
   <Route path = '/login' element = {<Login/>}/>
   <Route path = '/signup' element = {<SignUp/>}/>
   <Route path = '*' element = {<PageNotFound/>}/>
   <Route path = '/enquiries' element = {<Enquiries/>}/>
   </Routes>
   </>
  );
}

export default App;
