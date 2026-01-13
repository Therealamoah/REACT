import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import UserForm from './Components/UserForm'
import UserList from './Components/UserList'


const App = () => {
  return (
    <section className='max-w-7xl mx-auto'>
     
      <div className='flex justify-center m-20 space-x-10'>
        
        <UserForm />
        <UserList />
       
      </div>
      
    </section>
  )
}

export default App;