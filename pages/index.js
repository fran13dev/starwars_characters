import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// import components
import { Layout } from '../components/Layout.js'

const Index = props => (
	<div>
		<Layout>
			<h1 className='title'>Star Wars Characters</h1>
			<ul>
				{props.characters.map(character => (
					<li key={character.name} className='list'>
						<Link
							href='/p/[url]'
							as={`/p/${character.url.slice(-2)}`}
						>
							<a className='listItem'>{character.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</Layout>

		<style jsx>{`
			.title {
				font-size: 50px;
				text-align: center;
				color: red;
			}

			ul {
				text-align: center;
			}

			.list {
				list-style-type: none;
			}

			.listItem {
				font-size: 24px;
				color: yellow;
				text-decoration: underline;
			}
		`}</style>
		<style global jsx>{`
			body {
				background-color: black;
			}
		`}</style>
	</div>
)

Index.getInitialProps = async () => {
	const res = await fetch('https://swapi.dev/api/people')
	const data = await res.json()
	const results = data.results

	return {
		characters: results,
	}
}

export default Index
