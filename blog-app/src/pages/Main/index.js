import './styles.css';
import Header from '../../components/Header';
import Post from '../../components/Posts'

export default function Main() {
  const posts = [
    { 
      id: 1,
      date: '02 de jul, 2021',
      title: 'Agora é oficial: o Windows 11 está vindo',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.'
    },
    { 
      id: 2,
      date: '02 de jul, 2021',
      title: 'Tim Berners-Lee vai leiloar código-fonte da web',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
    },
    { 
      id: 3,
      date: '02 de jul, 2021',
      title: 'Tem Firefox novo no pedaço e você vai querer migrar',
      content:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.'
    },
    { 
      id: 4,
      date: '02 de jul, 2021',
      title: 'John McAfee, criador do antivírus McAfee, morre',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.'
    }] 

  return (
    <div className="App">
      <Header />
      <div className='container-content'>
        {
          posts.map(post => {
            return <Post 
              key = {post.id}
              date = {post.date}
              title = {post.title}
              content = {post.content}
            />
          })
      }
      </div>
    </div>
  );
}
