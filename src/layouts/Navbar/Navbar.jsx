import { LiNavbar } from '../../components/LiNavbar/LiNavbar'
export const Navbar = () => {

  const styles={
    li:"hover:text-red-900"
  }

  const {li} = styles
  return (
    <nav>
      <ul className='flex flex-row font-bold text-xl text-white gap-5'>
        <LiNavbar
        myStyles={li}
        contentAnchor ='Home'
        />
        <LiNavbar
       myStyles={li}
        contentAnchor='Class 1'
        />
        <LiNavbar
        myStyles={li}
        contentAnchor='Class 2'
        />
      </ul>
    </nav>
  )
}
