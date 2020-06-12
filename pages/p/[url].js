import fetch from 'isomorphic-unfetch'
import { NavBar } from '../../components/NavBar'

// import components
import { Layout } from '../../components/Layout.js'

const Post = props => (
	<div className='div'>
		<NavBar />
		<Layout>
			<h1>{`Name: ${props.character.name}`}</h1>
			<div className='flex1'>
				<p>{`Height: ${props.character.height}`}</p>
				<p>{`Weight: ${props.character.mass}`}</p>
			</div>

			<div className='flex1'>
				<p>{`Hair: ${props.character.hair_color}`}</p>
				<p>{`Eyes: ${props.character.eye_color}`}</p>
			</div>

			<div className='flex1'>
				<p>{`Gender: ${props.character.gender}`}</p>
				<p>{`Year of Birth: ${props.character.birth_year}`}</p>
			</div>
		</Layout>
		<style jsx>{`
			.div {
				border: 1px solid white;
				padding: 10px;
				margin: 5% 10% 0 10%;
			}

			.flex1 {
				display: flex;
				justify-content: center;
			}

			h1 {
				font-size: 50px;
				text-align: center;
				color: red;
			}

			p {
				font-size: 32px;
				margin: 25px;
				color: yellow;
			}
		`}</style>
		<style global jsx>{`
			body {
				background-color: black;
			}
		`}</style>
	</div>
)

Post.getInitialProps = async context => {
	const { url } = context.query
	const res = await fetch(`https://swapi.dev/api/people/${url}`)
	const character = await res.json()

	return { character }
}

export default Post
