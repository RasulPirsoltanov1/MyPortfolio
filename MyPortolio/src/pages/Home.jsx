
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="image">
          <img src='../../public/myself.png' />
        </div>
        <p className='name'>Hi my name is Rasul</p>
        <div className="prompt">
          <p>Software Developer with a passion learinin and creating</p>
          <div className="icons">
            <a href="mailto:resulresull510@gmail.com"> <EmailIcon className='icon' fontSize="large"></EmailIcon></a>
            <a href="https://github.com/RasulPirsoltanov1"> <GitHubIcon className='icon' fontSize="large"></GitHubIcon></a>
            <a href="https://www.linkedin.com/in/rasul-pirsoltanov-a6831722b/"> <LinkedInIcon className='icon' fontSize="large"></LinkedInIcon></a>
          </div>
        </div>
      </div>
      <div className='skills' id='skills'>
        <h2>Skills</h2>
        <ol className='list'>
          <li className='listItem'>
            <h3 className='skillType'>Front End</h3>
            <span>Html, Css, JavaScript, ReactJs, Redux</span>
          </li>
          <li className='listItem'>
            <h3 className='skillType'>Back End</h3>
            <span>C#,Asp .Net, Design Patterns, SQL, MsSql</span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home;